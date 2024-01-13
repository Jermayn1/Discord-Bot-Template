const { loadFiles } = require("../Functions/fileLoader")

async function loadModals(client) {
    console.time("Modals Loaded");

    await client.modals.clear();
    const modals = new Array();

    const files = await loadFiles("Interactions/Modals");

    for (const file of files) {
        try {
            const modal = require(file);

            if(!modal.id) return modals.push({ Modal: file.split("/").pop().slice(0, -3), Status: "❌", Error: "Missing Modal Id"});
            client.modals.set(modal.id, modal);
            modals.push({ Modal: modal.id || file.split("/").pop().slice(0, -3), Status: "✅" })
        } catch (error) {
            console.log(error)
            //modals.push({ Modal: modal.id || file.split("/").pop().slice(0, -3), Status: "❌", Error: error.toString() });
        }
    }

    console.table(modals, ["Modal", "Status", "Error"]);
    console.info("\n\x1b[36m%s\x1b[0m", "Loaded Modals");
    console.timeEnd("Modals Loaded");
}
    
module.exports = { loadModals };