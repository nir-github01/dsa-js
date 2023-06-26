class Node {
    constructor (value) 
    {
        this.data = 0;
        this.next = null;

    }
}

class StackUsingLinkedList{
    constructor(){
        this.top = null;
    }

    push(x){
        let temp = new Node();
        if(temp == null ){
            console.log("Heap Over Flow");
            return;

        }

        temp.data = x;;
        temp.link = this.top;
        this.top = temp;
    }

    isEmpty(){
        return this.top == null;
    }
    peek()
    {
        if(!this.isEmpty()){
            return this.top.data;
        }else{
            console.log("Stack is empty");
            return -1;
        }
    }

    pop(){
        if(this.top == null ) {
            console.log("stack is underFlow");
            return;
        }
        this.top = this.top.link;
    }
    display(){
        if(this.top == null ) {
            console.log("Stack is under Flow");
        }else{
            let temp = this.top;
            while(temp != null) {
                console.log(temp.data + " ->");
                temp = temp.link; 
            }
        }
    }
}


let obj = new StackUsingLinkedList();

obj.push(11);
obj.push(22);
obj.push(33);
obj.push(44);

//Print stacjk element

obj.display();

//print Top element of stack 
console.log("Top element is ", obj.peek() + " ");

//Delete top element of stack 
obj.pop();
obj.pop();

//print stack elements

obj.display();

console.log("Top element is ", obj.peek() );