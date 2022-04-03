// Invert a binary tree 



public class MyClass {
    public static void main(String args[]) {
     
     class Node{
        int data;
        Node left, right;
        public Node(int item){
            data = item;
            left = right = null;
        }
     }
     class invertBinaryTree{
         Node root;
         void invert(){
             root = invert(root);
         }
         Node invert(Node node){
             if(node == null)
             return node;
             Node right = invert(node.right);
             Node left = invert(node.left);
             
             node.left = right;
             node.right = left;
             return node;
         }
         void printAnswer(){
             printAnswer(root);
         }
         
         void printAnswer(Node node){
             if(node == null)
             return;
             printAnswer(node.left);
             System.out.print(node.data + " ");
             printAnswer(node.right);
         }
         
     }
    }
}
