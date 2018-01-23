<script>
let tmax_options = {

  delay: 0,
  paused: false,
  onComplete: function() {
    console.log('animation is complete');
  },
  onCompleteScope: function() {
    console.log('animation scope is complete');
  },
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
  },
  onStartScope: function() {
    console.log('on start scope called');
  },
  onUpdate: function() {
    console.log('on update called');
  },
  onUpdateScope: function() {
    console.log('on update scope called');
  },
  onRepeat: function() {
    console.log('on repeat called');
  },
  onRepeatScope: function() {
    console.log('on repeat scope called');
  },
  onReverseComplete: function() {
  	let timedd = tl.duration()
    console.log(timedd+'on reverse complete');
  },
  onReverseCompleteScope: function() {
    console.log('on reverse complete scope called');
  },
  autoRemoveChildren: false,
  smoothChildTiming: false,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  onCompleteParams: [],
  onReverseCompleteParams: [],
  onStartParams: [],
  onUpdateParams: [],
  onRepeatParams: []
};

const tl = new TimelineMax(tmax_options,{});

export default {tl}	
</script>