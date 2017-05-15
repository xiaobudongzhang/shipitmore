module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    home: {
      workspace: '/tmp/shipitmore',
      deployTo: '/home/shipitmore',
      repositoryUrl: 'git@github.com:xiaobudongzhang/shipitmore.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 4,
      deleteOnRollback: false,
      //y: '/path/to/key',
      shallowClone: true,
      servers: 'root@192.168.80.130'
    },
    work:{
      workspace: '/tmp/deploy/workplace/shipit',
      deployTo: '/home/shipit/deploy',
      repositoryUrl: 'git@github.com:xiaobudongzhang/shipitmore.git',
      ignores: ['.git'],
      rsync: ['--delete-after'],//rsync参数
      keepReleases: 4,
      //key: 'C:/Users/DEV-Z/.ssh'
      deleteOnRollback: false,
      servers: 'root@101.201.41.44'

    }
    
  });
};




shipit.on('init',function(){
    shipit.start('initLog');
});

shipit.task('initLog',function(){
//log
});
