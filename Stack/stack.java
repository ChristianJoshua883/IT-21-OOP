package stack;

import java.util.Stack;


public class stack {
    public static void main(String[] args) {

        Stack<Integer> myStack = new Stack<>();

       
        myStack.push(10);
        myStack.push(20);
        myStack.push(30);
        myStack.push(40);

        System.out.println("Stack: " + myStack);

        
        int topElement = myStack.pop();
        System.out.println("Popped: " + topElement);

        
        int peekedElement = myStack.peek();
        System.out.println("Peeked: " + peekedElement);

       
        boolean isEmpty = myStack.isEmpty();
        System.out.println("Is Stack Empty? " + isEmpty);

     
        int stackSize = myStack.size();
        System.out.println("Stack Size: " + stackSize);
    }
}