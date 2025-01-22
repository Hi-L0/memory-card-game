export const getData = async ()=>{
    //getting the cards data from a file in public folder /* test the fetching part */
    try {
        const response = await fetch('/data/cards.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.cards;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return [];
    }
}