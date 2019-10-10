/**
 * Created by Administrator on 2019/9/25.
 */
public class TacketThread extends Thread{
    private static int tacket=100;
    @Override
    public void run(){
        while(tacket>0) {
            synchronized (this) {
                if (tacket > 0) {
                    System.out.println(this.getName() + "卖出第" + (100 - tacket) + "张");
                }
            }
        }
    }
}
