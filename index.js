// record = [
//     {year:'2014', result:'W',},
//     {year:'2000', result:'L'},
//     {year:'1999', result:'W'}
// ]

const superbowlWin = (records) => {
    const winningRecord = records.find(record => record.result === 'W');
    return winningRecord ? winningRecord.year : undefined;
  };
  
//console.log(superbowlWin)