const { loadFiles } = require("../Functions/fileLoader")

async function loadSelectMenus(client) {
    console.time("Select Menus Loaded");

    client.selectMenus.clear();

    const selectMenus = new Array();

    const files = await loadFiles("Interactions/Select Menus");

    for (const file of files) {
        try {
            const selectMenu = require(file);

            console.log(selectMenu)

            if(!selectMenu.id) return selectMenus.push({ Menu: file.split("/").pop().slice(0, -3), Status: "❌", Error: "Missing Select Menu Id"});
            client.selectMenus.set(selectMenu.id, selectMenu);
            selectMenus.push({ Menu: selectMenu.id || file.split("/").pop().slice(0, -3), Status: "✅" })
        } catch (error) {
            selectMenus.push({ Menu: selectMenu.id || file.split("/").pop().slice(0, -3), Status: "❌", Error: error.toString() });
        }
    }

    console.table(selectMenus, ["Select Menu", "Status", "Error"]);
    console.info("\n\x1b[36m%s\x1b[0m", "Select Menus loaded.");
    console.timeEnd("Select Menus Loaded");
}
      
module.exports = { loadSelectMenus };