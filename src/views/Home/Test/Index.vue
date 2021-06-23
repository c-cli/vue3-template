<template>
  this is test
  <div>loading:{{loading}}</div>
  <div>data:{{data}}</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRequest } from 'vue-request';
import { getData, getData1212 } from '@/api/example';

export default defineComponent({
  setup() {
    const { loading, data, run } = useRequest(getData, {
      manual: true,
    });

    onMounted(() => {
      setTimeout(() => {
        run(
          {
            name: 'ss',
          },
          {
            successCb: ({ data: data1 }) => {
              console.log('success', data1);
            },
          },
        );
      }, 1000);
    });

    getData(
      {
        name: 'sss',
      },
      {
        successCb({ data: data1 }) {
          data1.list.forEach((item) => {
            console.log(item.name);
          });
        },
      },
    );

    getData1212(
      {
        courseId: 'sss',
      },
      {
        successCb({ data: data2 }) {
          console.log('data', data2.list);
        },
      },
    );

    return {
      loading,
      data,
    };
  },
});
</script>
