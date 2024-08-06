let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

function phi([n00, n01, n10, n11]) {
    return  (n00 * n11 - n01 * n10) / (
        Math.sqrt(
            (n00 + n01) *
            (n10 + n11) *
            (n01 + n11) *
            (n00 + n10)
        )
    );
}

function getAllJournalEvents(journal) {
    const events = [];

    for (const entry of journal) {
        for (const event of entry.events) {
            if (!events.includes(event))
                events.push(event);
        }
    }

    return events;
}


function findPhi(table) {
    return (
        (table[3] * table[0] - table[1] * table[2]) /
            Math.sqrt(
                (table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2])
            )
        );
}


function createTableFor(event, journals) {
    const table = [0, 0, 0, 0];

    for (const journal of journals) {
        let index = 0;

        if (journal.events.includes(event)) index = 1;
        if (journal.squirrel) index += 2;
        table[index] += 1;
    }

    return table;
}


addEntry(["work", "touched tree", "pizza", "running",
"television"], true);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
console.log(journal);
console.log("===============================");
console.log(journal);
console.log(findPhi([76, 9, 4, 1]));
console.log(`journal: ${journal}, event: work`);
console.log('=================================');
const table = createTableFor("work", journal);
console.log(`table ${table}, Phi is ${findPhi(table)}`);
console.log(`Events: ${getAllJournalEvents(journal)}`);

