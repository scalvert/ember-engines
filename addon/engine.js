import Ember from 'ember';

// Load extensions to Ember
import './-private/route-ext';
import './-private/router-ext';
import './-private/engine-instance-ext';

const { Engine } = Ember;

export default Engine.extend();