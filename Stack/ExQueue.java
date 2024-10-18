package linklist.Queue.Stack;

import java.util.LinkedList;
import java.util.Queue;

public class ExQueue{

    public static void main(String[] args) {
        
        Queue<Integer> queue = new LinkedList<>();

        
        queue.add(10);
        queue.add(20);
        queue.add(30);

        
        int firstElement = queue.poll(); 
        int secondElement = queue.poll(); 

        
        System.out.println("Remaining elements in the queue: " + queue);

        
        queue.add(40);
        queue.add(50);

        
        int thirdElement = queue.poll();

      
        System.out.println("Remaining elements in the queue: " + queue);
    }
}