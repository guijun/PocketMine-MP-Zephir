[ { "type": "namespace", "name": "PocketMine\\Utils", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 4, "char": 5 }, { "type": "class", "name": "Random", "abstract": 0, "final": 0, "definition": { "properties": [ { "visibility": [ "protected" ], "type": "property", "name": "z", "default": { "type": "int", "value": "0", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 6, "char": 17 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 7, "char": 10 }, { "visibility": [ "protected" ], "type": "property", "name": "w", "default": { "type": "int", "value": "0", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 7, "char": 17 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 9, "char": 7 } ], "methods": [ { "visibility": [ "public" ], "type": "method", "name": "__construct", "parameters": [ { "type": "parameter", "name": "seed", "const": 0, "data-type": "int", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 9, "char": 38 } ], "statements": [ { "type": "mcall", "expr": { "type": "mcall", "variable": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 10, "char": 8 }, "name": "setSeed", "call-type": 1, "parameters": [ { "parameter": { "type": "variable", "value": "seed", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 10, "char": 21 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 10, "char": 21 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 10, "char": 22 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 11, "char": 2 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 13, "char": 7 }, { "visibility": [ "public" ], "type": "method", "name": "setSeed", "parameters": [ { "type": "parameter", "name": "seed", "const": 0, "data-type": "int", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 13, "char": 34 } ], "statements": [ { "type": "let", "assignments": [ { "assign-type": "object-property", "operator": "assign", "variable": "this", "property": "z", "expr": { "type": "bitwise_xor", "left": { "type": "variable", "value": "seed", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 14, "char": 22 }, "right": { "type": "int", "value": "0xdeadbeef", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 14, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 14, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 14, "char": 34 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 15, "char": 5 }, { "type": "let", "assignments": [ { "assign-type": "object-property", "operator": "assign", "variable": "this", "property": "w", "expr": { "type": "bitwise_xor", "left": { "type": "variable", "value": "seed", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 15, "char": 22 }, "right": { "type": "int", "value": "0xc0de1337", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 15, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 15, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 15, "char": 34 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 16, "char": 2 } ], "return-type": { "type": "return-type", "list": null, "void": 1, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 13, "char": 43 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 20, "char": 3 }, { "visibility": [ "public" ], "type": "method", "name": "nextInt", "statements": [ { "type": "return", "expr": { "type": "bitwise_and", "left": { "type": "mcall", "variable": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 22, "char": 15 }, "name": "nextSignedInt", "call-type": 1, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 22, "char": 32 }, "right": { "type": "int", "value": "0x7fffffff", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 22, "char": 44 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 22, "char": 44 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 23, "char": 2 } ], "docblock": "**\n\t * Returns an 31-bit integer (not signed)\n\t *", "return-type": { "type": "return-type", "list": [ { "type": "return-type-parameter", "data-type": "int", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 21, "char": 34 } ], "void": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 21, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 27, "char": 3 }, { "visibility": [ "public" ], "type": "method", "name": "nextSignedInt", "statements": [ { "type": "let", "assignments": [ { "assign-type": "object-property", "operator": "assign", "variable": "this", "property": "z", "expr": { "type": "add", "left": { "type": "mul", "left": { "type": "int", "value": "36969", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 23 }, "right": { "type": "list", "left": { "type": "bitwise_and", "left": { "type": "property-access", "left": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 31 }, "right": { "type": "variable", "value": "z", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 34 }, "right": { "type": "int", "value": "65535", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 41 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 41 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 43 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 43 }, "right": { "type": "list", "left": { "type": "mul", "left": { "type": "property-access", "left": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 51 }, "right": { "type": "variable", "value": "z", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 54 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 54 }, "right": { "type": "int", "value": "65536", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 61 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 61 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 62 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 62 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 29, "char": 62 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 5 }, { "type": "let", "assignments": [ { "assign-type": "object-property", "operator": "assign", "variable": "this", "property": "w", "expr": { "type": "add", "left": { "type": "mul", "left": { "type": "int", "value": "18000", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 23 }, "right": { "type": "list", "left": { "type": "bitwise_and", "left": { "type": "property-access", "left": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 31 }, "right": { "type": "variable", "value": "w", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 34 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 34 }, "right": { "type": "int", "value": "65535", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 41 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 41 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 43 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 43 }, "right": { "type": "list", "left": { "type": "mul", "left": { "type": "property-access", "left": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 51 }, "right": { "type": "variable", "value": "w", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 54 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 54 }, "right": { "type": "int", "value": "65536", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 61 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 61 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 62 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 62 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 30, "char": 62 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 8 }, { "type": "return", "expr": { "type": "add", "left": { "type": "mul", "left": { "type": "property-access", "left": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 15 }, "right": { "type": "variable", "value": "z", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 18 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 18 }, "right": { "type": "int", "value": "65536", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 26 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 26 }, "right": { "type": "property-access", "left": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 33 }, "right": { "type": "variable", "value": "w", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 35 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 35 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 31, "char": 35 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 32, "char": 2 } ], "docblock": "**\n\t * Returns an 32-bit integer (signed)\n\t *", "return-type": { "type": "return-type", "list": [ { "type": "return-type-parameter", "data-type": "int", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 28, "char": 40 } ], "void": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 28, "char": 40 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 34, "char": 7 }, { "visibility": [ "public" ], "type": "method", "name": "nextFloat", "statements": [ { "type": "return", "expr": { "type": "div", "left": { "type": "mcall", "variable": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 35, "char": 15 }, "name": "nextInt", "call-type": 1, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 35, "char": 26 }, "right": { "type": "double", "value": "2147483647.0", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 35, "char": 40 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 35, "char": 40 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 36, "char": 2 } ], "return-type": { "type": "return-type", "list": [ { "type": "return-type-parameter", "data-type": "double", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 34, "char": 38 } ], "void": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 34, "char": 38 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 38, "char": 7 }, { "visibility": [ "public" ], "type": "method", "name": "nextSignedFloat", "statements": [ { "type": "return", "expr": { "type": "div", "left": { "type": "mcall", "variable": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 39, "char": 15 }, "name": "nextSignedInt", "call-type": 1, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 39, "char": 32 }, "right": { "type": "double", "value": "2147483647.0", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 39, "char": 46 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 39, "char": 46 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 40, "char": 2 } ], "return-type": { "type": "return-type", "list": [ { "type": "return-type-parameter", "data-type": "double", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 38, "char": 44 } ], "void": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 38, "char": 44 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 42, "char": 7 }, { "visibility": [ "public" ], "type": "method", "name": "nextBoolean", "statements": [ { "type": "return", "expr": { "type": "equals", "left": { "type": "list", "left": { "type": "bitwise_and", "left": { "type": "mcall", "variable": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 16 }, "name": "nextSignedInt", "call-type": 1, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 33 }, "right": { "type": "int", "value": "0x01", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 39 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 39 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 42 }, "right": { "type": "int", "value": "0", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 45 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 43, "char": 45 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 44, "char": 2 } ], "return-type": { "type": "return-type", "list": [ { "type": "return-type-parameter", "data-type": "bool", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 42, "char": 42 } ], "void": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 42, "char": 42 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 7 }, { "visibility": [ "public" ], "type": "method", "name": "nextRange", "parameters": [ { "type": "parameter", "name": "start", "const": 0, "data-type": "int", "mandatory": 0, "default": { "type": "int", "value": "0", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 41 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 41 }, { "type": "parameter", "name": "end", "const": 0, "data-type": "int", "mandatory": 0, "default": { "type": "int", "value": "0x7fffffff", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 63 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 63 } ], "statements": [ { "type": "return", "expr": { "type": "add", "left": { "type": "variable", "value": "start", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 16 }, "right": { "type": "list", "left": { "type": "mod", "left": { "type": "mcall", "variable": { "type": "variable", "value": "this", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 24 }, "name": "nextInt", "call-type": 1, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 35 }, "right": { "type": "list", "left": { "type": "sub", "left": { "type": "add", "left": { "type": "variable", "value": "end", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 42 }, "right": { "type": "int", "value": "1", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 46 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 46 }, "right": { "type": "variable", "value": "start", "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 53 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 53 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 54 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 54 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 55 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 47, "char": 55 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 48, "char": 2 } ], "return-type": { "type": "return-type", "list": [ { "type": "return-type-parameter", "data-type": "int", "mandatory": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 71 } ], "void": 0, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 46, "char": 71 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 50, "char": 1 } ], "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 50, "char": 1 }, "file": "\/home\/shoghicp\/PocketMine-MP-Zephir\/pocketmine\/pocketmine\/utils\/Random.zep", "line": 50, "char": 1 } ]
