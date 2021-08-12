// Computer Architecture
// Compute CPU's
// Computer RAM (total and available)
// Computer Disk Space (total and available)
// Computer Hostname
// Computer IP Address

exports.getData = function() {
  const os = require('os');
  const checkDiskSpace = require('check-disk-space').default;
  let GB = (1024*1024*1024);

  if (process.argv != "") {
    switch (process.argv[2]) {
      case '-arch':
        console.log(os.arch());
        break;
      case '-cpu':
        console.log(os.cpus());
        break;
      case '-ram':
        console.log('RAM: ', os.totalmem() / GB, 'gigabytes');
        console.log('Free RAM: ', os.freemem() / GB, 'gigabytes');
        break;
      case '-hdd':
        checkDiskSpace('/mnt/mygames').then((diskSpace) => {
          console.log(diskSpace)
          // {
          //     diskPath: '/',
          //     free: 12345678,
          //     size: 98756432
          // }
          // Note: `free` and `size` are in bytes
        })
        break;
      case '-hostname':
        console.log(os.hostname());
        break;
      case '-ip':
        console.log(os.networkInterfaces());
        break;
      default:
        console.log(`
        Choose command below
        -arch
        -cpu
        -ram
        -hdd
        -hostname
        -ip
        `)
        break;
    }
  }
}