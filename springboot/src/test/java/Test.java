/**
 * Created by Administrator on 2019/9/20.
 */
public class Test {
    public static void main(String[] args) {
        TacketThread t=new TacketThread();
        Thread a=new Thread(t);
        a.setName("一号");
        Thread b=new Thread(t);
        b.setName("二号");

        a.start();
        b.start();
    }
}
