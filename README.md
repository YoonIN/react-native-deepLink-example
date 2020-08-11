# react-native-deepLink-example

**ios**

1. 상황에 맞춰 AppDelegate.m 에서 @end 위에 코드를 추가한다. 



**ios 9.x or newer**  
    
    // Add the header at the top of the file:
    #import <React/RCTLinkingManager.h>
    
    // Add this above `@end`:
    - (BOOL)application:(UIApplication *)application
    openURL:(NSURL *)url
    options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
      {
        return [RCTLinkingManager application:application openURL:url options:options];
      }

**ios 8.x or lower**  

    // Add the header at the top of the file:
    #import <React/RCTLinkingManager.h>

    // Add this above `@end`:
    - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
    sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
    {
      return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
    }

**UniversalLinks**  

    - (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
     restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
     {
       return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
      }
  

2. info-> URL Types에 app name 입력  
ex) deepLinkTest일때  
identifier : deepLinkTest  
URL Schemes : deepLinkTest  


**참조:** https://reactnavigation.org/docs/deep-linking 
