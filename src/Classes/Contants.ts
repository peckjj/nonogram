export class Constants {
    static readonly SequenceConsts = class {
        static readonly ROW_DELIMIT = "\n";
        static readonly IS_OFF_SYMBOL = ".";
    }

    static readonly BoardConsts = class {
        static readonly ON_BACKGROUND = 'white';
        static readonly OFF_BACKGROUND = '#0F0F0F';
    }

    static readonly DummySolution = class {
        static readonly ALL_ON_5_5 = 
        'XXXXX' + Constants.SequenceConsts.ROW_DELIMIT +
        'XXXXX' + Constants.SequenceConsts.ROW_DELIMIT +
        'XXXXX' + Constants.SequenceConsts.ROW_DELIMIT +
        'XXXXX' + Constants.SequenceConsts.ROW_DELIMIT +
        'XXXXX';

        static readonly ALL_OFF_5_5 = 
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(5) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(5) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(5) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(5) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(5);

        static readonly DIAGONAL_GROW_5_5 = 
        'X'.repeat(5) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL + 'X'.repeat(4) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(2) + 'X'.repeat(3) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(3) + 'X'.repeat(2) + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL.repeat(4) + 'X';

        static readonly DISPERSED_5_5 = 
        'X' + Constants.SequenceConsts.IS_OFF_SYMBOL + 'XX' + Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL + 'X' + Constants.SequenceConsts.IS_OFF_SYMBOL + 'X' + Constants.SequenceConsts.ROW_DELIMIT +
        'X' + Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL + 'XXX' + Constants.SequenceConsts.ROW_DELIMIT +
        Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL + 'X' + Constants.SequenceConsts.IS_OFF_SYMBOL + Constants.SequenceConsts.IS_OFF_SYMBOL;
    }
}