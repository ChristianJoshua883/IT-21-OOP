package linklist.Queue.Stack;

import java.util.LinkedList;

public class LinkedListExample {

    public static void main(String[] args) {
        LinkedList<String> fruits = new LinkedList<>();

        // Insertion
        fruits.add("Apple");
        fruits.addFirst("Banana");
        fruits.addLast("Cherry");
        fruits.add(1, "Date");

        System.out.println("Linked List Original: " + fruits);
        System.out.println(fruits.size());

        // Searching
        if (fruits.contains("Date")) {
            System.out.println("True");
        } else {
            System.out.println("False");
        }

        boolean containsDate = fruits.contains("Date");
        System.out.println(containsDate);

        
    }
}

















































































// copy nako sa deletion ni maam
      // Deletion
//        animals.remove();
//        animals.removeFirst();
//        animals.removeLast();
//        animals.remove(2);
//        System.out.println("LinkedList After Deletion: " + animals);
//        Insertion:    add(); addFirst();  addLast();  add(index, data);
//         Deletion:    remove();   removeFirst();  removeLast(); remove(index);
//          Searching operation:        contains(element); size();