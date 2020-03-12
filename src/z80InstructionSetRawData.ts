// @see http://map.grauw.nl/resources/z80instr.php
// @see http://www.cpcwiki.eu/forum/programming/rasm-z80-assembler-in-beta/
// @see https://wiki.specnext.dev/Extended_Z80_instruction_set#Z80N_instructions_opcodes

// [ Instruction Set, Instruction, Timing Z80, Z80+M1, CPC, Opcode, Size ]
export const z80InstructionSetRawData = [
	// Z80 Instruction set
	[ "S", "ADC A,(HL)", "7", "8", "2", "8E", "1" ],
	[ "S", "ADC A,(IX+o)", "19", "21", "3", "DD 8E o", "3" ],
	[ "S", "ADC A,(IY+o)", "19", "21", "3", "FD 8E o", "3" ],
	[ "S", "ADC A,IXp", "8", "10", "2", "DD 88+p", "2" ],
	[ "S", "ADC A,IYq", "8", "10", "2", "FD 88+q", "2" ],
	[ "S", "ADC A,n", "7", "8", "2", "CE n", "2" ],
	[ "S", "ADC A,r", "4", "5", "1", "88+r", "1" ],
	[ "S", "ADC HL,BC", "15", "17", "4", "ED 4A", "2" ],
	[ "S", "ADC HL,DE", "15", "17", "4", "ED 5A", "2" ],
	[ "S", "ADC HL,HL", "15", "17", "4", "ED 6A", "2" ],
	[ "S", "ADC HL,SP", "15", "17", "4", "ED 7A", "2" ],
	[ "S", "ADD A,(HL)", "7", "8", "2", "86", "1" ],
	[ "S", "ADD A,(IX+o)", "19", "21", "3", "DD 86 o", "3" ],
	[ "S", "ADD A,(IY+o)", "19", "21", "3", "FD 86 o", "3" ],
	[ "S", "ADD A,IXp", "8", "10", "2", "DD 80+p", "2" ],
	[ "S", "ADD A,IYq", "8", "10", "2", "FD 80+q", "2" ],
	[ "S", "ADD A,n", "7", "8", "2", "C6 n", "2" ],
	[ "S", "ADD A,r", "4", "5", "1", "80+r", "1" ],
	[ "S", "ADD HL,BC", "11", "12", "3", "9", "1" ],
	[ "S", "ADD HL,DE", "11", "12", "3", "19", "1" ],
	[ "S", "ADD HL,HL", "11", "12", "3", "29", "1" ],
	[ "S", "ADD HL,SP", "11", "12", "3", "39", "1" ],
	[ "S", "ADD IX,BC", "15", "17", "4", "DD 09", "2" ],
	[ "S", "ADD IX,DE", "15", "17", "4", "DD 19", "2" ],
	[ "S", "ADD IX,IX", "15", "17", "4", "DD 29", "2" ],
	[ "S", "ADD IX,SP", "15", "17", "4", "DD 39", "2" ],
	[ "S", "ADD IY,BC", "15", "17", "4", "FD 09", "2" ],
	[ "S", "ADD IY,DE", "15", "17", "4", "FD 19", "2" ],
	[ "S", "ADD IY,IY", "15", "17", "4", "FD 29", "2" ],
	[ "S", "ADD IY,SP", "15", "17", "4", "FD 39", "2" ],
	[ "S", "AND (HL)", "7", "8", "2", "A6", "1" ],
	[ "S", "AND (IX+o)", "19", "21", "3", "DD A6 o", "3" ],
	[ "S", "AND (IY+o)", "19", "21", "3", "FD A6 o", "3" ],
	[ "S", "AND IXp", "8", "10", "2", "DD A0+p", "2" ],
	[ "S", "AND IYq", "8", "10", "2", "FD A0+q", "2" ],
	[ "S", "AND n", "7", "8", "2", "E6 n", "2" ],
	[ "S", "AND r", "4", "5", "1", "A0+r", "1" ],
	[ "S", "BIT b,(HL)", "12", "14", "3", "CB 46+8*b", "2" ],
	[ "S", "BIT b,(IX+o)", "20", "22", "6", "DD CB o 46+8*b", "4" ],
	[ "S", "BIT b,(IY+o)", "20", "22", "6", "FD CB o 46+8*b", "4" ],
	[ "S", "BIT b,r", "8", "10", "2", "CB 40+8*b+r", "2" ],
	[ "S", "CALL C,nn", "17/10", "18/11", "5/3", "DC nn nn", "3" ],
	[ "S", "CALL M,nn", "17/10", "18/11", "5/3", "FC nn nn", "3" ],
	[ "S", "CALL NC,nn", "17/10", "18/11", "5/3", "D4 nn nn", "3" ],
	[ "S", "CALL nn", "17", "18", "5", "CD nn nn", "3" ],
	[ "S", "CALL NZ,nn", "17/10", "18/11", "5/3", "C4 nn nn", "3" ],
	[ "S", "CALL P,nn", "17/10", "18/11", "5/3", "F4 nn nn", "3" ],
	[ "S", "CALL PE,nn", "17/10", "18/11", "5/3", "EC nn nn", "3" ],
	[ "S", "CALL PO,nn", "17/10", "18/11", "5/3", "E4 nn nn", "3" ],
	[ "S", "CALL Z,nn", "17/10", "18/11", "5/3", "CC nn nn", "3" ],
	[ "S", "CCF", "4", "5", "1", "3F", "1" ],
	[ "S", "CP (HL)", "7", "8", "2", "BE", "1" ],
	[ "S", "CP (IX+o)", "19", "21", "3", "DD BE o", "3" ],
	[ "S", "CP (IY+o)", "19", "21", "3", "FD BE o", "3" ],
	[ "S", "CP IXp", "8", "10", "2", "DD B8+p", "2" ],
	[ "S", "CP IYq", "8", "10", "2", "FD B8+q", "2" ],
	[ "S", "CP n", "7", "8", "2", "FE n", "2" ],
	[ "S", "CP r", "4", "5", "1", "B8+r", "1" ],
	[ "S", "CPD", "16", "18", "4", "ED A9", "2" ],
	[ "S", "CPDR", "21/16", "23/18", "6/4", "ED B9", "2" ],
	[ "S", "CPI", "16", "18", "4", "ED A1", "2" ],
	[ "S", "CPIR", "21/16", "23/18", "6/4", "ED B1", "2" ],
	[ "S", "CPL", "4", "5", "1", "2F", "1" ],
	[ "S", "DAA", "4", "5", "1", "27", "1" ],
	[ "S", "DEC (HL)", "11", "12", "3", "35", "1" ],
	[ "S", "DEC (IX+o)", "23", "25", "6", "DD 35 o", "3" ],
	[ "S", "DEC (IY+o)", "23", "25", "6", "FD 35 o", "3" ],
	[ "S", "DEC A", "4", "5", "1", "3D", "1" ],
	[ "S", "DEC B", "4", "5", "1", "5", "1" ],
	[ "S", "DEC BC", "6", "7", "2", "0B", "1" ],
	[ "S", "DEC C", "4", "5", "1", "0D", "1" ],
	[ "S", "DEC D", "4", "5", "1", "15", "1" ],
	[ "S", "DEC DE", "6", "7", "2", "1B", "1" ],
	[ "S", "DEC E", "4", "5", "1", "1D", "1" ],
	[ "S", "DEC H", "4", "5", "1", "25", "1" ],
	[ "S", "DEC HL", "6", "7", "2", "2B", "1" ],
	[ "S", "DEC IX", "10", "12", "3", "DD 2B", "2" ],
	[ "S", "DEC IXp", "8", "10", "2", "DD 05+8*p", "2" ],
	[ "S", "DEC IY", "10", "12", "3", "FD 2B", "2" ],
	[ "S", "DEC IYq", "8", "10", "2", "FD 05+8*q", "2" ],
	[ "S", "DEC L", "4", "5", "1", "2D", "1" ],
	[ "S", "DEC SP", "6", "7", "2", "3B", "1" ],
	[ "S", "DI", "4", "5", "1", "F3", "1" ],
	[ "S", "DJNZ o", "13/8", "14/9", "4/3", "10 o", "2" ],
	[ "S", "EI", "4", "5", "1", "FB", "1" ],
	[ "S", "EX (SP),HL", "19", "20", "6", "E3", "1" ],
	[ "S", "EX (SP),IX", "23", "25", "7", "DD E3", "2" ],
	[ "S", "EX (SP),IY", "23", "25", "7", "FD E3", "2" ],
	[ "S", "EX AF,AF'", "4", "5", "1", "8", "1" ],
	[ "S", "EX DE,HL", "4", "5", "1", "EB", "1" ],
	[ "S", "EXX", "4", "5", "1", "D9", "1" ],
	[ "S", "HALT", "4", "5", "1", "76", "1" ],
	[ "S", "IM 0", "8", "10", "2", "ED 46", "2" ],
	[ "S", "IM 1", "8", "10", "2", "ED 56", "2" ],
	[ "S", "IM 2", "8", "10", "2", "ED 5E", "2" ],
	[ "S", "IN (C)", "12", "14", "4", "ED 70", "2" ], // alt. IN F,(C)
	[ "S", "IN A,(C)", "12", "14", "3", "ED 78", "2" ],
	[ "S", "IN A,(n)", "11", "12", "3", "DB n", "2" ],
	[ "S", "IN B,(C)", "12", "14", "4", "ED 40", "2" ],
	[ "S", "IN C,(C)", "12", "14", "4", "ED 48", "2" ],
	[ "S", "IN D,(C)", "12", "14", "4", "ED 50", "2" ],
	[ "S", "IN E,(C)", "12", "14", "4", "ED 58", "2" ],
	[ "S", "IN F,(C)", "12", "14", "4", "ED 70", "2" ], // alt. IN (C)
	[ "S", "IN H,(C)", "12", "14", "4", "ED 60", "2" ],
	[ "S", "IN L,(C)", "12", "14", "4", "ED 68", "2" ],
	[ "S", "INC (HL)", "11", "12", "3", "34", "1" ],
	[ "S", "INC (IX+o)", "23", "25", "6", "DD 34 o", "3" ],
	[ "S", "INC (IY+o)", "23", "25", "6", "FD 34 o", "3" ],
	[ "S", "INC A", "4", "5", "1", "3C", "1" ],
	[ "S", "INC B", "4", "5", "1", "4", "1" ],
	[ "S", "INC BC", "6", "7", "2", "3", "1" ],
	[ "S", "INC C", "4", "5", "1", "0C", "1" ],
	[ "S", "INC D", "4", "5", "1", "14", "1" ],
	[ "S", "INC DE", "6", "7", "2", "13", "1" ],
	[ "S", "INC E", "4", "5", "1", "1C", "1" ],
	[ "S", "INC H", "4", "5", "1", "24", "1" ],
	[ "S", "INC HL", "6", "7", "2", "23", "1" ],
	[ "S", "INC IX", "10", "12", "3", "DD 23", "2" ],
	[ "S", "INC IXp", "8", "10", "2", "DD 04+8*p", "2" ],
	[ "S", "INC IY", "10", "12", "3", "FD 23", "2" ],
	[ "S", "INC IYq", "8", "10", "2", "FD 04+8*q", "2" ],
	[ "S", "INC L", "4", "5", "1", "2C", "1" ],
	[ "S", "INC SP", "6", "7", "2", "33", "1" ],
	[ "S", "IND", "16", "18", "5", "ED AA", "2" ],
	[ "S", "INDR", "21/16", "23/18", "6/5", "ED BA", "2" ],
	[ "S", "INI", "16", "18", "5", "ED A2", "2" ],
	[ "S", "INIR", "21/16", "23/18", "6/5", "ED B2", "2" ],
	[ "S", "JP (HL)", "4", "5", "1", "E9", "1" ], // alt. JP HL
	[ "S", "JP (IX)", "8", "10", "2", "DD E9", "2" ],
	[ "S", "JP (IY)", "8", "10", "2", "FD E9", "2" ],
	[ "S", "JP C,nn", "10", "11", "4/3", "DA nn nn", "3" ],
	[ "S", "JP HL", "4", "5", "1", "E9", "1" ], // alt. JP (HL)
	[ "S", "JP M,nn", "10", "11", "4/3", "FA nn nn", "3" ],
	[ "S", "JP NC,nn", "10", "11", "4/3", "D2 nn nn", "3" ],
	[ "S", "JP nn", "10", "11", "3", "C3 nn nn", "3" ],
	[ "S", "JP NZ,nn", "10", "11", "4/3", "C2 nn nn", "3" ],
	[ "S", "JP P,nn", "10", "11", "4/3", "F2 nn nn", "3" ],
	[ "S", "JP PE,nn", "10", "11", "4/3", "EA nn nn", "3" ],
	[ "S", "JP PO,nn", "10", "11", "4/3", "E2 nn nn", "3" ],
	[ "S", "JP Z,nn", "10", "11", "4/3", "CA nn nn", "3" ],
	[ "S", "JR C,o", "12/7", "13/8", "3/2", "38 o", "2" ],
	[ "S", "JR NC,o", "12/7", "13/8", "3/2", "30 o", "2" ],
	[ "S", "JR NZ,o", "12/7", "13/8", "3/2", "20 o", "2" ],
	[ "S", "JR o", "12", "13", "3", "18 o", "2" ],
	[ "S", "JR Z,o", "12/7", "13/8", "3/2", "28 o", "2" ],
	[ "S", "LD (BC),A", "7", "8", "2", "2", "1" ],
	[ "S", "LD (DE),A", "7", "8", "2", "12", "1" ],
	[ "S", "LD (HL),n", "10", "11", "3", "36 n", "2" ],
	[ "S", "LD (HL),r", "7", "8", "2", "70+r", "1" ],
	[ "S", "LD (IX+o),n", "19", "21", "6", "DD 36 o n", "4" ],
	[ "S", "LD (IX+o),r", "19", "21", "5", "DD 70+r o", "3" ],
	[ "S", "LD (IY+o),n", "19", "21", "6", "FD 36 o n", "4" ],
	[ "S", "LD (IY+o),r", "19", "21", "5", "FD 70+r o", "3" ],
	[ "S", "LD (nn),A", "13", "14", "4", "32 nn nn", "3" ],
	[ "S", "LD (nn),BC", "20", "22", "6", "ED 43 nn nn", "4" ],
	[ "S", "LD (nn),DE", "20", "22", "6", "ED 53 nn nn", "4" ],
	[ "S", "LD (nn),HL", "16", "17", "5", "22 nn nn", "3" ],
	[ "S", "LD (nn),IX", "20", "22", "6", "DD 22 nn nn", "4" ],
	[ "S", "LD (nn),IY", "20", "22", "6", "FD 22 nn nn", "4" ],
	[ "S", "LD (nn),SP", "20", "22", "6", "ED 73 nn nn", "4" ],
	[ "S", "LD A,(BC)", "7", "8", "2", "0A", "1" ],
	[ "S", "LD A,(DE)", "7", "8", "2", "1A", "1" ],
	[ "S", "LD A,(HL)", "7", "8", "2", "7E", "1" ],
	[ "S", "LD A,(IX+o)", "19", "21", "5", "DD 7E o", "3" ],
	[ "S", "LD A,(IY+o)", "19", "21", "5", "FD 7E o", "3" ],
	[ "S", "LD A,(nn)", "13", "14", "4", "3A nn nn", "3" ],
	[ "S", "LD A,I", "9", "11", "3", "ED 57", "2" ],
	[ "S", "LD A,IXp", "8", "10", "2", "DD 78+p", "2" ],
	[ "S", "LD A,IYq", "8", "10", "2", "FD 78+q", "2" ],
	[ "S", "LD A,n", "7", "8", "2", "3E n", "2" ],
	[ "S", "LD A,r", "4", "5", "1", "78+r", "1" ],
	[ "S", "LD A,R", "9", "11", "3", "ED 5F", "2" ],
	[ "S", "LD B,(HL)", "7", "8", "2", "46", "1" ],
	[ "S", "LD B,(IX+o)", "19", "21", "5", "DD 46 o", "3" ],
	[ "S", "LD B,(IY+o)", "19", "21", "5", "FD 46 o", "3" ],
	[ "S", "LD B,IXp", "8", "10", "2", "DD 40+p", "2" ],
	[ "S", "LD B,IYq", "8", "10", "2", "FD 40+q", "2" ],
	[ "S", "LD B,n", "7", "8", "2", "06 n", "2" ],
	[ "S", "LD B,r", "4", "5", "1", "40+r", "1" ],
	[ "S", "LD BC,(nn)", "20", "22", "6", "ED 4B nn nn", "4" ],
	[ "S", "LD BC,nn", "10", "11", "3", "01 nn nn", "3" ],
	[ "S", "LD C,(HL)", "7", "8", "2", "4E", "1" ],
	[ "S", "LD C,(IX+o)", "19", "21", "5", "DD 4E o", "3" ],
	[ "S", "LD C,(IY+o)", "19", "21", "5", "FD 4E o", "3" ],
	[ "S", "LD C,IXp", "8", "10", "2", "DD 48+p", "2" ],
	[ "S", "LD C,IYq", "8", "10", "2", "FD 48+q", "2" ],
	[ "S", "LD C,n", "7", "8", "2", "0E n", "2" ],
	[ "S", "LD C,r", "4", "5", "1", "48+r", "1" ],
	[ "S", "LD D,(HL)", "7", "8", "2", "56", "1" ],
	[ "S", "LD D,(IX+o)", "19", "21", "5", "DD 56 o", "3" ],
	[ "S", "LD D,(IY+o)", "19", "21", "5", "FD 56 o", "3" ],
	[ "S", "LD D,IXp", "8", "10", "2", "DD 50+p", "2" ],
	[ "S", "LD D,IYq", "8", "10", "2", "FD 50+q", "2" ],
	[ "S", "LD D,n", "7", "8", "2", "16 n", "2" ],
	[ "S", "LD D,r", "4", "5", "1", "50+r", "1" ],
	[ "S", "LD DE,(nn)", "20", "22", "4", "ED 5B nn nn", "4" ],
	[ "S", "LD DE,nn", "10", "11", "3", "11 nn nn", "3" ],
	[ "S", "LD E,(HL)", "7", "8", "2", "5E", "1" ],
	[ "S", "LD E,(IX+o)", "19", "21", "5", "DD 5E o", "3" ],
	[ "S", "LD E,(IY+o)", "19", "21", "5", "FD 5E o", "3" ],
	[ "S", "LD E,IXp", "8", "10", "2", "DD 58+p", "2" ],
	[ "S", "LD E,IYq", "8", "10", "2", "FD 58+q", "2" ],
	[ "S", "LD E,n", "7", "8", "2", "1E n", "2" ],
	[ "S", "LD E,r", "4", "5", "1", "58+r", "1" ],
	[ "S", "LD H,(HL)", "7", "8", "2", "66", "1" ],
	[ "S", "LD H,(IX+o)", "19", "21", "5", "DD 66 o", "3" ],
	[ "S", "LD H,(IY+o)", "19", "21", "5", "FD 66 o", "3" ],
	[ "S", "LD H,n", "7", "8", "2", "26 n", "2" ],
	[ "S", "LD H,r", "4", "5", "1", "60+r", "1" ],
	[ "S", "LD HL,(nn)", "16", "17", "5", "2A nn nn", "3" ],
	[ "S", "LD HL,nn", "10", "11", "3", "21 nn nn", "3" ],
	[ "S", "LD I,A", "9", "11", "3", "ED 47", "2" ],
	[ "S", "LD IX,(nn)", "20", "22", "6", "DD 2A nn nn", "4" ],
	[ "S", "LD IX,nn", "14", "16", "4", "DD 21 nn nn", "4" ],
	[ "S", "LD IXh,n", "11", "13", "4", "DD 26 n", "3" ],
	[ "S", "LD IXh,p", "8", "10", "3", "DD 60+p", "2" ],
	[ "S", "LD IXl,n", "11", "13", "4", "DD 2E n", "3" ],
	[ "S", "LD IXl,p", "8", "10", "3", "DD 68+p", "2" ],
	[ "S", "LD IY,(nn)", "20", "22", "6", "FD 2A nn nn", "4" ],
	[ "S", "LD IY,nn", "14", "16", "4", "FD 21 nn nn", "4" ],
	[ "S", "LD IYh,n", "11", "13", "3", "FD 26 n", "3" ],
	[ "S", "LD IYh,q", "8", "10", "3", "FD 60+q", "2" ],
	[ "S", "LD IYl,n", "11", "13", "4", "FD 2E n", "3" ],
	[ "S", "LD IYl,q", "8", "10", "3", "FD 68+q", "2" ],
	[ "S", "LD L,(HL)", "7", "8", "2", "6E", "1" ],
	[ "S", "LD L,(IX+o)", "19", "21", "5", "DD 6E o", "3" ],
	[ "S", "LD L,(IY+o)", "19", "21", "5", "FD 6E o", "3" ],
	[ "S", "LD L,n", "7", "8", "2", "2E n", "2" ],
	[ "S", "LD L,r", "4", "5", "1", "68+r", "1" ],
	[ "S", "LD R,A", "9", "11", "3", "ED 4F", "2" ],
	[ "S", "LD SP,(nn)", "20", "22", "6", "ED 7B nn nn", "4" ],
	[ "S", "LD SP,HL", "6", "7", "2", "F9", "1" ],
	[ "S", "LD SP,IX", "10", "12", "3", "DD F9", "2" ],
	[ "S", "LD SP,IY", "10", "12", "3", "FD F9", "2" ],
	[ "S", "LD SP,nn", "10", "11", "3", "31 nn nn", "3" ],
	[ "S", "LDD", "16", "18", "5", "ED A8", "2" ],
	[ "S", "LDDR", "21/16", "23/18", "6/5", "ED B8", "2" ],
	[ "S", "LDI", "16", "18", "5", "ED A0", "2" ],
	[ "S", "LDIR", "21/16", "23/18", "6/5", "ED B0", "2" ],
	[ "S", "NEG", "8", "10", "2", "ED 44", "2" ],
	[ "S", "NOP", "4", "5", "1", "0", "1" ],
	[ "S", "OR (HL)", "7", "8", "2", "B6", "1" ],
	[ "S", "OR (IX+o)", "19", "21", "3", "DD B6 o", "3" ],
	[ "S", "OR (IY+o)", "19", "21", "3", "FD B6 o", "3" ],
	[ "S", "OR IXp", "8", "10", "2", "DD B0+p", "2" ],
	[ "S", "OR IYq", "8", "10", "2", "FD B0+q", "2" ],
	[ "S", "OR n", "7", "8", "2", "F6 n", "2" ],
	[ "S", "OR r", "4", "5", "1", "B0+r", "1" ],
	[ "S", "OTDR", "21/16", "23/18", "6/5", "ED BB", "2" ],
	[ "S", "OTIR", "21/16", "23/18", "6/5", "ED B3", "2" ],
	[ "S", "OUT (C),0", "12", "14", "4", "ED 71", "2" ],
	[ "S", "OUT (C),A", "12", "14", "4", "ED 79", "2" ],
	[ "S", "OUT (C),B", "12", "14", "4", "ED 41", "2" ],
	[ "S", "OUT (C),C", "12", "14", "4", "ED 49", "2" ],
	[ "S", "OUT (C),D", "12", "14", "4", "ED 51", "2" ],
	[ "S", "OUT (C),E", "12", "14", "4", "ED 59", "2" ],
	[ "S", "OUT (C),H", "12", "14", "4", "ED 61", "2" ],
	[ "S", "OUT (C),L", "12", "14", "4", "ED 69", "2" ],
	[ "S", "OUT (n),A", "11", "12", "4", "D3 n", "2" ],
	[ "S", "OUTD", "16", "18", "5", "ED AB", "2" ],
	[ "S", "OUTI", "16", "18", "5", "ED A3", "2" ],
	[ "S", "POP AF", "10", "11", "3", "F1", "1" ],
	[ "S", "POP BC", "10", "11", "3", "C1", "1" ],
	[ "S", "POP DE", "10", "11", "3", "D1", "1" ],
	[ "S", "POP HL", "10", "11", "3", "E1", "1" ],
	[ "S", "POP IX", "14", "16", "4", "DD E1", "2" ],
	[ "S", "POP IY", "14", "16", "4", "FD E1", "2" ],
	[ "S", "PUSH AF", "11", "12", "4", "F5", "1" ],
	[ "S", "PUSH BC", "11", "12", "4", "C5", "1" ],
	[ "S", "PUSH DE", "11", "12", "4", "D5", "1" ],
	[ "S", "PUSH HL", "11", "12", "4", "E5", "1" ],
	[ "S", "PUSH IX", "15", "17", "5", "DD E5", "2" ],
	[ "S", "PUSH IY", "15", "17", "5", "FD E5", "2" ],
	[ "S", "RES b,(HL)", "15", "17", "4", "CB 86+8*b", "2" ],
	[ "S", "RES b,(IX+o)", "23", "25", "7", "DD CB o 86+8*b", "4" ],
	[ "S", "RES b,(IY+o)", "23", "25", "7", "FD CB o 86+8*b", "4" ],
	[ "S", "RES b,r", "8", "10", "2", "CB 80+8*b+r", "2" ],
	[ "S", "RET", "10", "11", "3", "C9", "1" ],
	[ "S", "RET C", "11/5", "12/6", "4/2", "D8", "1" ],
	[ "S", "RET M", "11/5", "12/6", "4/2", "F8", "1" ],
	[ "S", "RET NC", "11/5", "12/6", "4/2", "D0", "1" ],
	[ "S", "RET NZ", "11/5", "12/6", "4/2", "C0", "1" ],
	[ "S", "RET P", "11/5", "12/6", "4/2", "F0", "1" ],
	[ "S", "RET PE", "11/5", "12/6", "4/2", "E8", "1" ],
	[ "S", "RET PO", "11/5", "12/6", "4/2", "E0", "1" ],
	[ "S", "RET Z", "11/5", "12/6", "4/2", "C8", "1" ],
	[ "S", "RETI", "14", "16", "4", "ED 4D", "2" ],
	[ "S", "RETN", "14", "16", "4", "ED 45", "2" ],
	[ "S", "RL (HL)", "15", "17", "4", "CB 16", "2" ],
	[ "S", "RL (IX+o)", "23", "25", "7", "DD CB o 16", "4" ],
	[ "S", "RL (IY+o)", "23", "25", "7", "FD CB o 16", "4" ],
	[ "S", "RL r", "8", "10", "2", "CB 10+r", "2" ],
	[ "S", "RLA", "4", "5", "1", "17", "1" ],
	[ "S", "RLC (HL)", "15", "17", "4", "CB 06", "2" ],
	[ "S", "RLC (IX+o)", "23", "25", "7", "DD CB o 06", "4" ],
	[ "S", "RLC (IY+o)", "23", "25", "7", "FD CB o 06", "4" ],
	[ "S", "RLC r", "8", "10", "2", "CB 00+r", "2" ],
	[ "S", "RLCA", "4", "5", "1", "7", "1" ],
	[ "S", "RLD", "18", "20", "5", "ED 6F", "2" ],
	[ "S", "RR (HL)", "15", "17", "4", "CB 1E", "2" ],
	[ "S", "RR (IX+o)", "23", "25", "7", "DD CB o 1E", "4" ],
	[ "S", "RR (IY+o)", "23", "25", "7", "FD CB o 1E", "4" ],
	[ "S", "RR r", "8", "10", "2", "CB 18+r", "2" ],
	[ "S", "RRA", "4", "5", "1", "1F", "1" ],
	[ "S", "RRC (HL)", "15", "17", "4", "CB 0E", "2" ],
	[ "S", "RRC (IX+o)", "23", "25", "7", "DD CB o 0E", "4" ],
	[ "S", "RRC (IY+o)", "23", "25", "7", "FD CB o 0E", "4" ],
	[ "S", "RRC r", "8", "10", "2", "CB 08+r", "2" ],
	[ "S", "RRCA", "4", "5", "1", "0F", "1" ],
	[ "S", "RRD", "18", "20", "5", "ED 67", "2" ],
	[ "S", "RST 0", "11", "12", "4", "C7", "1" ],
	[ "S", "RST 8H", "11", "12", "4", "CF", "1" ],
	[ "S", "RST 10H", "11", "12", "4", "D7", "1" ],
	[ "S", "RST 18H", "11", "12", "4", "DF", "1" ],
	[ "S", "RST 20H", "11", "12", "4", "E7", "1" ],
	[ "S", "RST 28H", "11", "12", "4", "EF", "1" ],
	[ "S", "RST 30H", "11", "12", "4", "F7", "1" ],
	[ "S", "RST 38H", "11", "12", "4", "FF", "1" ],
	[ "S", "SBC A,(HL)", "7", "8", "2", "9E", "1" ],
	[ "S", "SBC A,(IX+o)", "19", "21", "3", "DD 9E o", "3" ],
	[ "S", "SBC A,(IY+o)", "19", "21", "3", "FD 9E o", "3" ],
	[ "S", "SBC A,IXp", "8", "10", "2", "DD 98+p", "2" ],
	[ "S", "SBC A,IYq", "8", "10", "2", "FD 98+q", "2" ],
	[ "S", "SBC A,n", "7", "8", "2", "DE n", "2" ],
	[ "S", "SBC A,r", "4", "5", "1", "98+r", "1" ],
	[ "S", "SBC HL,BC", "15", "17", "4", "ED 42", "2" ],
	[ "S", "SBC HL,DE", "15", "17", "4", "ED 52", "2" ],
	[ "S", "SBC HL,HL", "15", "17", "4", "ED 62", "2" ],
	[ "S", "SBC HL,SP", "15", "17", "4", "ED 72", "2" ],
	[ "S", "SCF", "4", "5", "1", "37", "1" ],
	[ "S", "SET b,(HL)", "15", "17", "4", "CB C6+8*b", "2" ],
	[ "S", "SET b,(IX+o)", "23", "25", "7", "DD CB o C6+8*b", "4" ],
	[ "S", "SET b,(IY+o)", "23", "25", "7", "FD CB o C6+8*b", "4" ],
	[ "S", "SET b,r", "8", "10", "2", "CB C0+8*b+r", "2" ],
	[ "S", "SL1 (HL)", "15", "17", "4", "CB 36", "2" ], // alt. SLL (HL)
	[ "S", "SL1 (IX+o)", "23", "25", "7", "DD CB o 36", "4" ], // alt. SLL (IX+o)
	[ "S", "SL1 (IY+o)", "23", "25", "7", "FD CB o 36", "4" ], // alt. SLL (IY+o)
	[ "S", "SL1 r", "8", "10", "2", "CB 30+r", "2" ], // alt. SLL r
	[ "S", "SLA (HL)", "15", "17", "4", "CB 26", "2" ],
	[ "S", "SLA (IX+o)", "23", "25", "7", "DD CB o 26", "4" ],
	[ "S", "SLA (IY+o)", "23", "25", "7", "FD CB o 26", "4" ],
	[ "S", "SLA r", "8", "10", "2", "CB 20+r", "2" ],
	[ "S", "SLL (HL)", "15", "17", "4", "CB 36", "2" ], // alt. SL1 (HL)
	[ "S", "SLL (IX+o)", "23", "25", "7", "DD CB o 36", "4" ], // alt. SL1 (IX+o)
	[ "S", "SLL (IY+o)", "23", "25", "7", "FD CB o 36", "4" ], // alt. SL1 (IY+o)
	[ "S", "SLL r", "8", "10", "2", "CB 30+r", "2" ], // alt. SL1 r
	[ "S", "SRA (HL)", "15", "17", "4", "CB 2E", "2" ],
	[ "S", "SRA (IX+o)", "23", "25", "7", "DD CB o 2E", "4" ],
	[ "S", "SRA (IY+o)", "23", "25", "7", "FD CB o 2E", "4" ],
	[ "S", "SRA r", "8", "10", "2", "CB 28+r", "2" ],
	[ "S", "SRL (HL)", "15", "17", "4", "CB 3E", "2" ],
	[ "S", "SRL (IX+o)", "23", "25", "7", "DD CB o 3E", "4" ],
	[ "S", "SRL (IY+o)", "23", "25", "7", "FD CB o 3E", "4" ],
	[ "S", "SRL r", "8", "10", "2", "CB 38+r", "2" ],
	[ "S", "SUB (HL)", "7", "8", "2", "96", "1" ],
	[ "S", "SUB (IX+o)", "19", "21", "7", "DD 96 o", "3" ],
	[ "S", "SUB (IY+o)", "19", "21", "7", "FD 96 o", "3" ],
	[ "S", "SUB IXp", "8", "10", "2", "DD 90+p", "2" ],
	[ "S", "SUB IYq", "8", "10", "2", "FD 90+q", "2" ],
	[ "S", "SUB n", "7", "8", "2", "D6 n", "2" ],
	[ "S", "SUB r", "4", "5", "1", "90+r", "1" ],
	[ "S", "XOR (HL)", "7", "8", "2", "AE", "1" ],
	[ "S", "XOR (IX+o)", "19", "21", "3", "DD AE o", "3" ],
	[ "S", "XOR (IY+o)", "19", "21", "3", "FD AE o", "3" ],
	[ "S", "XOR IXp", "8", "10", "2", "DD A8+p", "2" ],
	[ "S", "XOR IYq", "8", "10", "2", "FD A8+q", "2" ],
	[ "S", "XOR n", "7", "8", "2", "EE n", "2" ],
	[ "S", "XOR r", "4", "5", "1", "A8+r", "1" ],

	// Z80N (ZX Spectrum Next Extended Z80 instruction set)
	[ "N", "LDIX", "16", "", "", "ED A4", "2" ],
	[ "N", "LDWS", "14", "", "", "ED A5", "2" ],
	[ "N", "LDIRX", "21/16", "", "", "ED B4", "2" ],
	[ "N", "LDDX", "16", "", "", "ED AC", "2" ],
	[ "N", "LDDRX", "21/16", "", "", "ED BC", "2" ],
	[ "N", "LDPIRX", "21/16", "", "", "ED B7", "2" ],
	[ "N", "OUTINB", "16", "", "", "ED 90", "2" ],
	[ "N", "MUL D,E", "8", "", "", "ED 30", "2" ],
	[ "N", "ADD HL,A", "8", "", "", "ED 31", "2" ],
	[ "N", "ADD DE,A", "8", "", "", "ED 32", "2" ],
	[ "N", "ADD BC,A", "8", "", "", "ED 33", "2" ],
	[ "N", "ADD HL,nn", "16", "", "", "ED 34 nn nn", "4" ],
	[ "N", "ADD DE,nn", "16", "", "", "ED 35 nn nn", "4" ],
	[ "N", "ADD BC,nn", "16", "", "", "ED 36 nn nn", "4" ],
	[ "N", "SWAPNIB", "8", "", "", "ED 23", "2" ],
	[ "N", "MIRROR", "8", "", "", "ED 24", "2" ],
	[ "N", "PUSH nn", "23", "", "", "ED 8A nn.h nn.l", "4" ],
	[ "N", "NEXTREG n1,n2", "20", "", "", "ED 91 n1 n2", "4" ],
	[ "N", "NEXTREG n,A", "17", "", "", "ED 92 n", "3" ],
	[ "N", "PIXELDN", "8", "", "", "ED 93", "2" ],
	[ "N", "PIXELAD", "8", "", "", "ED 94", "2" ],
	[ "N", "SETAE", "8", "", "", "ED 95", "2" ],
	[ "N", "TEST n", "11", "", "", "ED 27 n", "3" ],
	[ "N", "BSLA DE,B", "8", "", "", "ED 28", "2" ],
	[ "N", "BSRA DE,B", "8", "", "", "ED 29", "2" ],
	[ "N", "BSRL DE,B", "8", "", "", "ED 2A", "2" ],
	[ "N", "BSRF DE,B", "8", "", "", "ED 2B", "2" ],
	[ "N", "BRLC DE,B", "8", "", "", "ED 2C", "2" ],
	[ "N", "JP (C)", "13", "", "", "ED 98", "2" ]
];
