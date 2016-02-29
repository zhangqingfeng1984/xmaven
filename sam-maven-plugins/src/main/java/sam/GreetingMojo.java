package sam;

import org.apache.maven.plugin.AbstractMojo;
import org.apache.maven.plugin.MojoExecutionException;
import org.apache.maven.plugin.MojoFailureException;

/**
 * Created by Administrator on 2015/12/15 0015.
 * @goal greeting
 * @phase compile
 */

public class GreetingMojo extends AbstractMojo {
    public void execute() throws MojoExecutionException, MojoFailureException {
        getLog().info(">>> sam greeting from GreetingMojo <<<");
    }
}
