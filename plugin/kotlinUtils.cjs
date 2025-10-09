function findFunctionIndexes(kotlinCode, fnName) {
  // Regex to match function declarations
  // Matches: fun functionName(...) { or fun functionName(...): ReturnType {
  const fnRegex = new RegExp(
    `\\bfun\\s+${fnName}\\s*\\([^)]*\\)(?:\\s*:\\s*[^{]+)?\\s*\\{`,
    'g'
  );
  
  const match = fnRegex.exec(kotlinCode);
  
  if (!match) {
    return null;
  }
  
  const startIndex = match.index;
  const openingBraceIndex = match.index + match[0].length - 1; // Index of the opening {
  
  // Find the matching closing brace
  let braceCount = 1;
  let i = match.index + match[0].length;
  let inString = false;
  let inChar = false;
  let inComment = false;
  let inMultiLineComment = false;
  let escaped = false;
  
  while (i < kotlinCode.length && braceCount > 0) {
    const char = kotlinCode[i];
    const nextChar = kotlinCode[i + 1];
    
    // Handle escape sequences
    if (escaped) {
      escaped = false;
      i++;
      continue;
    }
    
    if (char === '\\' && (inString || inChar)) {
      escaped = true;
      i++;
      continue;
    }
    
    // Handle multi-line comments
    if (!inString && !inChar && !inComment) {
      if (char === '/' && nextChar === '*') {
        inMultiLineComment = true;
        i += 2;
        continue;
      }
    }
    
    if (inMultiLineComment) {
      if (char === '*' && nextChar === '/') {
        inMultiLineComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    
    // Handle single-line comments
    if (!inString && !inChar && !inMultiLineComment) {
      if (char === '/' && nextChar === '/') {
        inComment = true;
        i += 2;
        continue;
      }
    }
    
    if (inComment) {
      if (char === '\n') {
        inComment = false;
      }
      i++;
      continue;
    }
    
    // Handle strings
    if (char === '"' && !inChar) {
      inString = !inString;
      i++;
      continue;
    }
    
    // Handle chars
    if (char === '\'' && !inString) {
      inChar = !inChar;
      i++;
      continue;
    }
    
    // Count braces only if not in string, char, or comment
    if (!inString && !inChar && !inComment && !inMultiLineComment) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
      }
    }
    
    i++;
  }
  
  if (braceCount === 0) {
    return { 
      startIndex, 
      endIndex: i, 
      openingBraceIndex, 
      closingBraceIndex: i - 1 
    };
  }
  
  // If we couldn't find matching braces, return null
  return null;
}

function findClassIndexes(kotlinCode, className) {
  // Regex to match class declarations
  // Matches: class ClassName, data class ClassName, sealed class ClassName, etc.
  const classRegex = new RegExp(
    `\\b(?:data\\s+|sealed\\s+|abstract\\s+|open\\s+|inner\\s+)?class\\s+${className}\\b[^{]*\\{`,
    'g'
  );
  
  const match = classRegex.exec(kotlinCode);
  
  if (!match) {
    return null;
  }
  
  const startIndex = match.index;
  const openingBraceIndex = match.index + match[0].length - 1; // Index of the opening {
  
  // Find the matching closing brace using the same logic
  let braceCount = 1;
  let i = match.index + match[0].length;
  let inString = false;
  let inChar = false;
  let inComment = false;
  let inMultiLineComment = false;
  let escaped = false;
  
  while (i < kotlinCode.length && braceCount > 0) {
    const char = kotlinCode[i];
    const nextChar = kotlinCode[i + 1];
    
    if (escaped) {
      escaped = false;
      i++;
      continue;
    }
    
    if (char === '\\' && (inString || inChar)) {
      escaped = true;
      i++;
      continue;
    }
    
    if (!inString && !inChar && !inComment) {
      if (char === '/' && nextChar === '*') {
        inMultiLineComment = true;
        i += 2;
        continue;
      }
    }
    
    if (inMultiLineComment) {
      if (char === '*' && nextChar === '/') {
        inMultiLineComment = false;
        i += 2;
        continue;
      }
      i++;
      continue;
    }
    
    if (!inString && !inChar && !inMultiLineComment) {
      if (char === '/' && nextChar === '/') {
        inComment = true;
        i += 2;
        continue;
      }
    }
    
    if (inComment) {
      if (char === '\n') {
        inComment = false;
      }
      i++;
      continue;
    }
    
    if (char === '"' && !inChar) {
      inString = !inString;
      i++;
      continue;
    }
    
    if (char === '\'' && !inString) {
      inChar = !inChar;
      i++;
      continue;
    }
    
    if (!inString && !inChar && !inComment && !inMultiLineComment) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
      }
    }
    
    i++;
  }
  
  if (braceCount === 0) {
    return { 
      startIndex, 
      endIndex: i, 
      openingBraceIndex, 
      closingBraceIndex: i - 1 
    };
  }
  
  return null;
}

function prependToClass(originalCode, className, newCode) {
  const classInfo = findClassIndexes(originalCode, className);
  
  if (!classInfo) {
    throw new Error(`Class "${className}" not found`);
  }
  
  // Insert after the opening brace
  const insertIndex = classInfo.openingBraceIndex + 1;
  
  // Check if there's a newline after the opening brace, if not add one
  const afterBrace = originalCode[insertIndex];
  const needsNewline = afterBrace !== '\n' && afterBrace !== '\r';
  
  const codeToInsert = needsNewline 
    ? '\n' + newCode 
    : newCode;
  
  return originalCode.slice(0, insertIndex) + 
         codeToInsert + 
         originalCode.slice(insertIndex);
}

function appendToClass(originalCode, className, newCode) {
  const classInfo = findClassIndexes(originalCode, className);
  
  if (!classInfo) {
    throw new Error(`Class "${className}" not found`);
  }
  
  // Insert before the closing brace
  const insertIndex = classInfo.closingBraceIndex;
  
  // Check if there's a newline before the closing brace, if not add one
  const beforeBrace = originalCode[insertIndex - 1];
  const needsNewline = beforeBrace !== '\n' && beforeBrace !== '\r';
  
  const codeToInsert = needsNewline 
    ? newCode + '\n' 
    : newCode;
  
  return originalCode.slice(0, insertIndex) + 
         codeToInsert + 
         originalCode.slice(insertIndex);
}

function appendToFunction(originalCode, functionName, newCode) {
  const fnInfo = findFunctionIndexes(originalCode, functionName);
  
  if (!fnInfo) {
    throw new Error(`Function "${functionName}" not found`);
  }
  
  // Insert before the closing brace
  const insertIndex = fnInfo.closingBraceIndex;
  
  // Check if there's a newline before the closing brace, if not add one
  const beforeBrace = originalCode[insertIndex - 1];
  const needsNewline = beforeBrace !== '\n' && beforeBrace !== '\r';
  
  const codeToInsert = needsNewline 
    ? newCode + '\n' 
    : newCode;
  
  return originalCode.slice(0, insertIndex) + 
         codeToInsert + 
         originalCode.slice(insertIndex);
}

function prependToFunction(originalCode, functionName, newCode) {
  const fnInfo = findFunctionIndexes(originalCode, functionName);
  
  if (!fnInfo) {
    throw new Error(`Function "${functionName}" not found`);
  }
  
  // Insert after the opening brace
  const insertIndex = fnInfo.openingBraceIndex + 1;
  
  // Check if there's a newline after the opening brace, if not add one
  const afterBrace = originalCode[insertIndex];
  const needsNewline = afterBrace !== '\n' && afterBrace !== '\r';
  
  const codeToInsert = needsNewline 
    ? '\n' + newCode 
    : newCode;
  
  return originalCode.slice(0, insertIndex) + 
         codeToInsert + 
         originalCode.slice(insertIndex);
}

function insertToFunction(originalCode, functionName, afterMatch, newCode) {
  const fnInfo = findFunctionIndexes(originalCode, functionName);
  
  if (!fnInfo) {
    throw new Error(`Function "${functionName}" not found`);
  }
  
  // Get the function body content
  const functionContent = originalCode.slice(fnInfo.openingBraceIndex + 1, fnInfo.closingBraceIndex);
  
  // Find the afterMatch string within the function body
  const matchIndex = functionContent.indexOf(afterMatch);
  
  if (matchIndex === -1) {
    throw new Error(`Match string "${afterMatch}" not found in function "${functionName}"`);
  }
  
  // Calculate the absolute position in the original code
  // We want to insert after the match, so add the length of the match
  const absoluteInsertIndex = fnInfo.openingBraceIndex + 1 + matchIndex + afterMatch.length;
  
  // Check if we need to add a newline after the match
  const afterMatchChar = originalCode[absoluteInsertIndex];
  const needsNewline = afterMatchChar !== '\n' && afterMatchChar !== '\r';
  
  const codeToInsert = needsNewline 
    ? '\n' + newCode 
    : newCode;
  
  return originalCode.slice(0, absoluteInsertIndex) + 
         codeToInsert + 
         originalCode.slice(absoluteInsertIndex);
}

module.exports = {
    findClassIndexes,
    findFunctionIndexes,
    appendToClass,
    appendToFunction,
    prependToClass,
    prependToFunction,
    insertToFunction
};
