const gameModel = require('../models/game');

async function insertGame(data) {
    const result = await gameModel.insertGame(data);
    return result;
}

async function updateGame(gameId, game) {
    const result = await gameModel.updateGame(gameId, game);
    return result;
}

async function deleteGame(gameId) {
    const result = await gameModel.deleteGame(gameId);
    return result;
}

async function getAllGames() {
    const result = await gameModel.getAllGames();
    return result;
}

module.exports = {
    insertGame, updateGame, deleteGame, getAllGames
}