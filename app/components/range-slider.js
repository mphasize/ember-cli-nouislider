import Ember from 'ember';

export default Ember.Component.extend({

  start:        undefined,
  step:         undefined,
  margin:       undefined,
  limit:        undefined,
  connect:      false,
  orientation:  "horizontal",
  direction:    "ltr",
  behaviour:    "tap",
  animate:      true,

  pips:         false,
  pipsOptions: {
    mode: 'range'
  },

  disabled: false,

  min: 0,
  max: 100,
  range: function() {
    return {
      min: this.get('min'),
      max: this.get('max')
    };
  }.property("min", "max"),

  didInsertElement: function() {
    this.slider = this.$().noUiSlider({
      start:       this.get('start'),
      step:        this.get('step'),
      margin:      this.get('margin'),
      limit:       this.get('limit'),
      range:       this.get('range'),
      connect:     this.get('connect'),
      orientation: this.get('orientation'),
      direction:   this.get('direction'),
      behaviour:   this.get('behaviour'),
      animate:     this.get('animate')
    });

    if(this.get('pips')) {
      this.$().noUiSlider_pips(this.get('pipsOptions'));
    }

    if(this.get('disabled')) {
      this.$().attr('disabled', 'disabled');
    }

    var _this = this;
    this.$().on("change", function() {
      _this.sendAction("change", _this.slider.val());
    });
  },

  disabledChanged: function() {
    if(this.get('disabled')) {
      this.$().attr('disabled', 'disabled');
    } else {
      this.$().removeAttr('disabled');
    }
  }.observes('disabled'),

  willDestroyElement: function() {
    this.slider[0].destroy();
  },

  setVal: function() {
    if (this.slider) {
      var val = this.get('start');
      this.slider.val( val );
    }
  }.observes('start')
});
