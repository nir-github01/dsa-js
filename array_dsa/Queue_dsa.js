function QueueClass (){
class Queue 
{
    constructor() 
    {
        debugger
        this.items = [];

    }
    isEmpty() 
    {
        debugger
        return this.items.length == 0;
    }
    enqueue(element)
    {
        debugger;
        this.items.push(element);
        document.write(element + "enqueued to queue");
        console.log(element + "enqueued to queue");
    }
    dequeue()
    {
        if(this.isEmpty())
        {
            return "UnderFlow";
            return this.items.shift();
        }
    }
    front()
    {
        if(this.isEmpty()){
            return "No elements in Queue";
            return this.items[0];
        }
    }
    rear(){
        if(this.isEmpty()) 
        {
            return "No elements is queue";
            return this.items[this.items.length - 1];
        }
    }
}

var queue = new Queue();


// Adding elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
 
// queue contains [10, 20, 30, 40]
// removes 10
document.write(queue.dequeue() + " dequeued from queue<br>");
console.log(queue.dequeue()+ "dequeue from queue");
// queue contains [20, 30, 40]
// Front is now 20
document.write("Front item is " + queue.front() + "<br>");
console.log("Front item is " + queue.front() + "<br>");
 
// printing the rear element
// Rear is 40
document.write("Rear item is " + queue.rear() + "<br>");
console.log("Rear item is " + queue.rear() + "<br>");
}