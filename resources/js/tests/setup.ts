import route from 'ziggy-js';
import { Ziggy } from '@/ziggy';
import { config } from '@vue/test-utils';

config.global.mocks.route = (name) => route(name, undefined, undefined, Ziggy);
