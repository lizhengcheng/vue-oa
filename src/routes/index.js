import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/modules/home/Home';
import Ticket from '@/modules/ticket/Ticket';
import Message from '@/modules/message/Message';
import Document from '@/modules/documents/Documents';
import Mail from '@/modules/mail/Mail';
import Log from '@/modules/log/Log';
import Meeting from '@/modules/meeting/Meeting';
import Attendance from '@/modules/attendance/Attendance';
import Survey from '@/modules/survey/Survey';
import Contacts from '@/modules/contacts/Contacts';
import Forum from '@/modules/forum/Forum';
import ForumTodo from '@/modules/forum/ForumTodo';
import ForumStart from '@/modules/forum/ForumStart';
import ForumMine from '@/modules/forum/ForumMine';
import ForumDone from '@/modules/forum/ForumDone';
import Sign from '@/modules/sign/Sign';
import SignLocation from '@/modules/sign/SignLocation';
import SignCounts from '@/modules/Sign/SignCounts';
import Report from '@/modules/report/Report';
import Schedule from '@/modules/schedule/Schedule';
//TODO data test
import Getdata from '@/modules/getdata/Getdata';

Vue.use(Router);

const routes = [
  // Home route
  { path: '/', component: Home },
  // ticket
  { path: '/ticket', component: Ticket },
  // message
  { path: '/message', component: Message },
  // offical document
  { path: '/documents', component: Document },
  // mail
  { path: '/mail', component: Mail },
  // log
  { path: '/log', component: Log },
  // meeting
  { path: '/meeting', component: Meeting },
  // attendance
  { path: '/attendance', component: Attendance },
  // survey
  { path: '/survey', component: Survey },
  // contacts
  { path: '/contacts', component: Contacts },
  // forum
  { path: '/forum',
    component: Forum,
    children: [
      {
        path: '/forumstart',
        component: ForumStart
      },
      {
        path: '/forummine',
        component: ForumMine
      },
      {
        path: '/forumdone',
        component: ForumDone
      },
      {
        path: '/forumtodo',
        component: ForumTodo
      }
    ]
  },
  //sign
  { path: '/sign',
    component: Sign,
    children: [
      {
        path: '/SignLocation',
        component: SignLocation
      },
      {
        path: '/SignCounts',
        component: SignCounts
      }
    ]
  },
  // report
  { path: '/report', component: Report },
  // schedule
  { path: '/schedule', component: Schedule },
  //getdata
  { path: '/getdata', component: Getdata }
];

export default new Router({ mode: 'history', routes });
