import { fetchList } from './content.js';

export async function fetchScore() {
    const scoreJson = await fetch('/ThePurpleList/data/_players.json');
    const score = await scoreJson.json();
    return score;
}
