<template>
    <div class="order">
        <div class="grid">
            <div>
                <h3>添加收货地址</h3>
                <div  class="titleup">
                    <div class="titlehead">
                        收货人: <input type="text" v-model="code">
                        地址: <input type="text" v-model="name">
                        手机号: <input type="text" v-model="number">
                        <input type="button" value="保存收货地址" @click='add()'>
                    </div>
                </div>
                <div v-for="book in books" :key="book.id" class="title">
                    <td>收货人:<div>{{book.id}}</div></td>
                    <td>地址:<div>{{book.name}}</div></td>
                    <td>手机号:<div>{{book.number}}</div></td>
                    <div>{{book.date | deteformat}}</div>
                    <td>操作:
                        <a href="#" @click='edit(book)'>修改</a>
                        <a href="#" @click='deletebook(book)'>删除</a>
                    </td>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	data: function() {
		return{
			code  : "",
			name  : "",
			number: "",
			flag  : false,   //fales
			index : "",
			books : [
				{
					id    : "张三",
					name  : "四川",
					number: "15688888888"
				},
				{
					id    : "李四",
					name  : "重庆",
					number: "15688888888"
				},
				{
					id    : "王五",
					name  : "湖南",
					number: "15688888888"
				}
			]
		}
	},
	methods: {
		//添加数据
		add(){
			// 加入一个空值判断
			if(this.code.length != 0 && this.name.length != 0 && this.number.length != 0 && !this.flag){
				var newBook = new Object();
				newBook.id = this.code;
				newBook.name = this.name;
				newBook.number = this.number;
				// 把当前newbook的数据加入books数组中
				this.books.push(newBook);
				// 清空输入框
				this.code = "";
				this.name = "";
				this.number = "";
			}
			else if(this.name.length != 0){
				this.books[this.index].name = this.name;
				this.books[this.index].code = this.code;
				this.books[this.index].code = this.number;
				this.flag = false;
				this.code = "";
				this.name = "";
				this.number = "";
			}
		},
		deletebook(book){
			// alert(book.name)
			//从数组中移除一个元素
			//先获取当前元素在数组中的下表索引
			var bookIndex = this.books.indexOf(book);
			//执行移除操作,第一个参数是要删除的数组的下标值；第二个参数：删除的个数
			this.books.splice(bookIndex, 1);
		},
		edit(book){
			this.flag = true;
			this.code = book.id;
			this.name = book.name;
			this.number = book.number;
			this.index = this.books.indexOf(book);
		}
	}
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/_color.scss";
@import "../../../assets/scss/_fonts.scss";
    .order{
        margin-top: 30px;
        background-color: $white-card;
        .grid{
            margin: 0 auto;
            h3{
                width: 100px;
                margin: 0 auto;
                padding-top: 15px;
            }
            .title{
            width: 500px;
            display: flex;
            flex-direction: column;
            margin-top: 15px;
            border: 1px solid $black-color;
            td{
                margin: 5px;
                display: flex;
                a{
                    margin: 0 5px;
                }
            }
        }
        .titlehead{
            width: 500px;
            display: flex;
            flex-direction: column;
            padding-top: 10px;
            input{
                margin: 5px 0;
            }
        }
        }
    }
</style>
