
export interface ScrambleWordsState {
    currentWord : string;
    errorCounter : number;
    guess : string;
    isGameOver : boolean;
    maxAllowErrors : number;
    maxSkips : number;
    points : number;
    scrambledWord : string;
    skipCounter : number;
    words : string[];
    totalWoords: number;
}

export type ScrambleWordsAction =
{ type: 'SET_GUESS', payload: string} 


const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};
export const getInitialState = (): ScrambleWordsState => {
    const shuffledWords = shuffleArray(GAME_WORDS);
    return {
    currentWord : shuffledWords[0],
    errorCounter : 0,
    guess : '',
    isGameOver : false,
    maxAllowErrors : 3,
    maxSkips : 3,
    points : 0,
    scrambledWord : scrambleWord(shuffledWords[0]),
    skipCounter : 0,
    words : shuffledWords,
    totalWoords: shuffledWords.length
}
}

export const scrambleWordReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {

    switch(action.type){
        default:
            return state;
    }
}