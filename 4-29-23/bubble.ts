const sort = (unsorted: number[]): number[] => {
    let sorted = false
    let buffer: number;
    let swapOccured = true;
    //start at i=1 because we will compare i=1 to i=0
    while (sorted === false) {
        sorted = sorted || !swapOccured;
        swapOccured = false;
        for (let i = 1; i < unsorted.length; i++) {
            if (unsorted[i] < unsorted[i - 1]) {
                swapOccured = true;
                buffer = unsorted[i];
                unsorted[i] = unsorted[i - 1];
                unsorted[i - 1] = buffer;
            }
        }
    }
    return unsorted;
}
export default sort
