import sleep from '../utils/sleep'
import getRandomId from '../utils/get-random-id'
import createAction from '../utils/create-action'

import { SONG_DELAY_TIME, REDUCE_DELAY_TIME } from '../constants'

export const START_GAME = "START_GAME";
export const START_SONG = "START_SONG";
export const FINISH_SONG = "FINISH_SONG";
export const LIGTHEN_PAD = "LIGTHEN_PAD";
export const LIGTHEN_OFF_PAD = "LIGTHEN_OFF_PAD"
export const GUESS_COLOR = "GUESS_COLOR";
export const NEXT_LEVEL = "NEXT_LEVEL"

const start = createAction(START_GAME);
const next = createAction(NEXT_LEVEL);

const startGame = (payload) => start({ next: getRandomId() });
const nextLevel = (payload) => next({ next: getRandomId() });


const guessColor = createAction(GUESS_COLOR);
const startSong = createAction(START_SONG);
const finishSong = createAction(FINISH_SONG);
const ligthenPad = createAction(LIGTHEN_PAD)
const ligthenOffPad = createAction(LIGTHEN_OFF_PAD)

const sing = (payload) => async (dispatch, getState) => {
    try{
        dispatch(startSong());
        const {match} = getState();

        for (let i = 0; i <= match.all.length - 1; i++) {
            const id = match.all[i];
            dispatch(ligthenPad({ id }));
            await sleep(SONG_DELAY_TIME);
            dispatch(ligthenOffPad());
            await sleep(SONG_DELAY_TIME);
        }

        dispatch(finishSong())
    } catch(e) {
        console.error(e)
    }
};

const guess = ({ succeeded, id}) => async (dispatch, getState) => {
    try{
        dispatch(guessColor({ succeeded, id}));
        dispatch(startSong());
        dispatch(ligthenPad({id}))
        await sleep(REDUCE_DELAY_TIME);
        dispatch(ligthenOffPad());
        await sleep(REDUCE_DELAY_TIME);
        dispatch(finishSong())

        const { match } = getState();
        const { all, guessed } = match;
        const done = all.length === guessed.length && succeeded;


        return new Promise((r) => r({done}));
    }catch(e) {
        console.error(e)
    }
}



export const actionCreators = {
    startSong,
    startGame,
    finishSong,
    ligthenPad,
    ligthenOffPad,
    nextLevel,
    guess,
    sing,
};