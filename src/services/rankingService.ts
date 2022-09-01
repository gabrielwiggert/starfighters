import * as rankingRepositories from '../repositories/rankingRepositories.js';

export async function getRanking() {

    const result = await rankingRepositories.getRankingDB()

    return { fighters: result.rows }
} 