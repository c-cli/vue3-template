export default [{
  path: '/test',
  name: 'Test',
  component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "Test" */ '@/views/Home/Test/Index.vue'),
}];
