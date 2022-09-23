const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const foo = await prisma.standing.upsert({
    create: {
      awayLosses: 0,
      awayTies: 0,
      awayWins: 0,
      calendarYear: 2022,
      conferenceId: 958267392,
      confLosses: 0,
      conferenceName: 'AFC',
      confTies: 0,
      confWins: 0,
      capRoom: 218200000,
      capAvailable: 27850000,
      capSpent: 190350000,
      defPassYds: 0,
      defPassYdsRank: 8,
      defRushYds: 0,
      defRushYdsRank: 8,
      defTotalYds: 0,
      defTotalYdsRank: 8,
      divisionId: 969539585,
      divLosses: 0,
      divisionName: 'AFC North',
      divTies: 0,
      divWins: 0,
      homeLosses: 0,
      homeTies: 0,
      homeWins: 0,
      netPts: 0,
      offPassYds: 0,
      offPassYdsRank: 8,
      offRushYds: 0,
      offRushYdsRank: 8,
      offTotalYds: 0,
      offTotalYdsRank: 8,
      ptsAgainstRank: 8,
      ptsForRank: 8,
      playoffStatus: 0,
      prevRank: 0,
      ptsAgainst: 0,
      ptsFor: 0,
      rank: 0,
      seed: 0,
      seasonIndex: 0,
      stageIndex: 0,
      totalLosses: 0,
      totalTies: 0,
      totalWins: 0,
      teamId: 972030012,
      teamName: 'Ravens',
      teamOvr: 82,
      tODiff: 0,
      weekIndex: 0,
      winLossStreak: 0,
      winPct: 0,
      leagueId: 23637252
    },
    update: {
      awayLosses: 0,
      awayTies: 0,
      awayWins: 0,
      calendarYear: 2022,
      conferenceId: 958267392,
      confLosses: 0,
      conferenceName: 'AFC',
      confTies: 0,
      confWins: 0,
      capRoom: 218200000,
      capAvailable: 27850000,
      capSpent: 190350000,
      defPassYds: 0,
      defPassYdsRank: 8,
      defRushYds: 0,
      defRushYdsRank: 8,
      defTotalYds: 0,
      defTotalYdsRank: 8,
      divisionId: 969539585,
      divLosses: 0,
      divisionName: 'AFC North',
      divTies: 0,
      divWins: 0,
      homeLosses: 0,
      homeTies: 0,
      homeWins: 0,
      netPts: 0,
      offPassYds: 0,
      offPassYdsRank: 8,
      offRushYds: 0,
      offRushYdsRank: 8,
      offTotalYds: 0,
      offTotalYdsRank: 8,
      ptsAgainstRank: 8,
      ptsForRank: 8,
      playoffStatus: 0,
      prevRank: 0,
      ptsAgainst: 0,
      ptsFor: 0,
      rank: 0,
      seed: 0,
      seasonIndex: 0,
      stageIndex: 0,
      totalLosses: 0,
      totalTies: 0,
      totalWins: 0,
      teamId: 972030012,
      teamName: 'Ravens',
      teamOvr: 82,
      tODiff: 0,
      weekIndex: 0,
      winLossStreak: 0,
      winPct: 0,
      leagueId: 23637252
    },
    where: {
      leagueId_teamId: {
        leagueId: 23637252,
        teamId: 972030012
      }
    }
  }) 

  console.log({ foo })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })