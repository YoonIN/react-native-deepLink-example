# react-native-deepLink-example

**ios**

상황에 맞춰 AppDelegate.m 에서 @end 위에 코드를 추가한다. 



**deepLinking ios 9.x or newer**  
  - (BOOL)application:(UIApplication *)application
    openURL:(NSURL *)url
    options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
    {
      return [RCTLinkingManager application:application openURL:url options:options];
    }

**deepLinking UniversalLinks**  


    - (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
     restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
     {
       return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
      }
  


**참조:** https://reactnavigation.org/docs/deep-linking 
