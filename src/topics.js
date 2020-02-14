const topics = [
  { title: 'General Course Materials', items: [
    { link: '/about-the-course/', text: 'About the course' },
    { link: '/reading-materials/', text: 'Additinal reading materials' },
  ]},
  { title: 'Week 1: Basic Language Features', items: [
    { link: '/history/', text: 'Short history of JavaScript' },
    { link: '/language-features/language-structure/', text: 'Language structure' },
    { link: '/language-features/variables/', text: 'Variables' },
    { link: '/language-features/operators/', text: 'Operators' },
    { link: '/language-features/conditionals/', text: 'Conditionals' },
    { link: '/language-features/types/', text: 'Types' },
    { link: '/language-features/numbers-and-math/', text: 'Numbers and Math' },
    { link: '/language-features/strings/', text: 'Strings' },
  ]},
  { title: 'Week 2: Advanced Language Features', items: [
    { link: '/language-features/objects/', text: 'Objects' },
    { link: '/language-features/prototypes/', text: 'Prototypes' },
    { link: '/language-features/arrays/', text: 'Arrays' }, 
    { link: '/language-features/functions/', text: 'Functions' },
    { link: '/language-features/loops/', text: 'Loops' },
    { link: '/language-features/scopes/', text: 'Scopes' },
    { link: '/language-features/error-handling/', text: 'Error handling' },
  ]},
  { title: 'Week 3: Host environments and the event loop', items: [
    { link: '/language-features/classes/', text: 'Classes' },
    { link: '/host-environments/code-loading/', text: 'Code loading' },
    { link: '/language-features/modules/', text: 'Modules' },
    { link: '/host-environments/event-loop/', text: 'The event loop' },
    { link: '/host-environments/browser/', text: 'The browser' },
    { link: '/host-environments/node-js/', text: 'Node.js' },
    { link: '/tooling/debugging/', text: 'Debugging' },
  ]},
  { title: 'Week 4: Tooling, data structures and design patterns', items: [
    { link: '/language-features/json/', text: 'JSON' },
    { link: '/tooling/npm/', text: 'NPM' },
    { link: '/tooling/static-analysis/', text: 'Static analysis' },
    { link: '/tooling/transpilers/', text: 'Transpilers' },
    { link: '/tooling/bundling/', text: 'Bundlers' },
    { link: '/data-structures/maps-and-sets/', text: 'Maps and Sets' },
    { link: '/data-structures/events/', text: 'Events' },
    { link: '/data-structures/promises/', text: 'Promises' },
    { link: '/data-structures/generators/', text: 'Generators' },
    { link: '/language-features/async-await/', text: 'Async/Await' },
    { link: '/data-structures/observables/', text: 'Observables' },
    { link: '/homework-overview/', text: 'Homework overview' },
  ]},
];

export default topics;

export const courseTitle = 'INF310: Modern JS';

export const defaultOpenedSection = 4;