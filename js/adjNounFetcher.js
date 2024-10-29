export async function fetchAdjectives() {
    const response = await fetch('./wu_adjs.txt');
    const text = await response.text();
    return text.split('\n').map(word => word.trim()).filter(Boolean);
}
  
export async function fetchNouns() {
    const response = await fetch('./wu_nouns.txt');
    const text = await response.text();
    return text.split('\n').map(word => word.trim()).filter(Boolean);
}