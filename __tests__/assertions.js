/* globals $ */

function describe(description, descCB) {
  if ($.writeln !== undefined) {
    $.writeln(description);
  }
  descCB();
}

function test(description, testCB) {
  try {
    testCB();
    if ($.writeln !== undefined) {
      $.writeln("✓ " + description);
    }
  } catch (error) {
    if ($.writeln !== undefined) {
      $.writeln("✘ " + description);
      $.writeln(error);
    }
  }
}

function expect(actual) {
  return {
    toBe: function(expected) {
      if (actual !== expected) {
        throw new Error(actual + " is not equal to " + expected);
      }
    },
    toEqual: function(expected) {
      if (actual !== expected) {
        throw new Error(actual + " is not equal to " + expected);
      }
    },
    toBeGreaterThen: function(expected) {
      if (actual <= expected) {
        throw new Error(actual + " is not greater then " + expected);
      }
    },
    toBeLessThen: function(expected) {
      if (actual >= expected) {
        throw new Error(actual + " is not less then " + expected);
      }
    }
  };
}