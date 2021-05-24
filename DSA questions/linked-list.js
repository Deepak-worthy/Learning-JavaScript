class linkedList{
    constructor(data){
        this.data=data;
        this.next=null;
    }
    static insert_last(head,data){
        if(head==null){
            head=new linkedList(data);
        }
        else{
            let cur=head;
            while(cur.next!==null){
                cur=cur.next;
            }
            cur.next=new linkedList(data);
        }
        return head;
    }
    static insert_front(head,data){
        if(head==null){
            head=new linkedList(data);
        }
        else{
            let newNode=new linkedList(data);
            newNode.next=head;
            head=newNode;
        }
        return head;
    }
    static delete_Node(head,data){
        let cur=head;
        if(head==null){
            return null;
        }
        if(head.next==null){
            if(head.data==data){
                return null;
            }
            else{
                console.log("element not found");
                return head;
            }
        }
        while(cur.next.data!==data){
            cur=cur.next;
        }
        cur.next=cur.next.next;
        return head;
    }
    static list_length(head){
        let count=0;
        let cur=head;
        while(cur!==null){
            cur=cur.next;
            ++count;
        }
        return count;
    }
}
let head=null;
head=linkedList.insert_last(head,10);
head=linkedList.insert_last(head,20);

head=linkedList.insert_front(head,30);
head=linkedList.insert_front(head,40);

head=linkedList.delete_Node(head,10);

let count=linkedList.list_length(head);
console.log(count);