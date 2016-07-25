module.exports.cron = {
  myFirstJob: {
    schedule: '* * * * * *',
    onTick: function () {

      console.log('You will see this every second' + sails.moment().format('MMMM Do YYYY, h:mm:ss a'));
    }
  }
};