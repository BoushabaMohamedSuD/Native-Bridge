
import com.idpalorg.IdpalAndroidSdk;
import com.idpalorg.data.Constants;
import com.idpalorg.di.callbacks.DidCompleteListener;
import com.idpalorg.di.callbacks.PreLoadingListerner;
import com.idpalorg.util.DateUtils;

import android.app.Activity;
import android.widget.Toast;

public class Test extends com.idpalorg.MyApplication {

    private static Test instance;
    private IdpalAndroidSdk idpalAndroidsdk;

    private Test() {

        idpalAndroidsdk = new IdpalAndroidSdk();

    }

    public static Test getInstance() {
        if (Test.instance == null) {
            Test.instance = new Test();
        }
        return Test.instance;

    }

    public void setUpActivity(Activity activity, String companyID, String licenseKey) {
        idpalAndroidsdk.getInstanceCompanyID(activity, companyID, licenseKey);
        // Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

}