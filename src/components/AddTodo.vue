<template>
    <div class="">
        <h3>添加内容</h3>
        <div class="ad">
            <form action="" @submit.prevent='onsubmit'>
                <input type="text" v-model="title" placeholder="添加待办事项">
                <input type="submit" value="添加">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'AddTodo',
    data(){
        return {
            title: ''
        };
    },
      methods:{
          ...mapActions(['addTodo']),
            onsubmit(){
                //分发actins
                this.addTodo(this.title);
                this.title = '';
            }
        }
}
</script>

<style scoped>
    form{
        display: flex;
    }
    input[type='text']{
        flex: 10;
        padding: 10px;
        border: 1px solid #41b883;
        outline: 0;
    }
    input[type='submit']{
        flex: 2;
        background: #41b883;
        color: #fff;
        border: 1px dotted #41b883;
        cursor: pointer;
    }
</style>
