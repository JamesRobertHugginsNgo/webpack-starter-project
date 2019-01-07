import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { foo } from './foo';
import { bar } from './bar';

function webpackStarterProject(container) {
	foo(container, bar);
}

export { webpackStarterProject };

const containers = document.querySelectorAll('[data-app="webpack-starter-project"]');
for (let index = 0, length = containers.length; index < length; index++) {
	webpackStarterProject(containers[index]);
}

