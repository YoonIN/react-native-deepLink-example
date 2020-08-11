# react-native-deepLink-example


##핵심
 Navigation Container 의 Parameter에 linking 을 주고 해당 옵션을 준다
 
 ###ios 
  AppDelegate.m @end 위에 옵션에 따라 다음을 선택적으로 삽입
  
 9.x 이상일때 
  ''' 
// Add the header at the top of the file:
#import <React/RCTLinkingManager.h>

// Add this above `@end`:
- (BOOL)application:(UIApplication *)application
   openURL:(NSURL *)url
   options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}
'''  

8.x 이하일때  

'''
// Add the header at the top of the file:
#import <React/RCTLinkingManager.h>

// Add this above `@end`:
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
'''  
Universal Link 사용시  
'''
// Add this above `@end`:
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity
 restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler
{
 return [RCTLinkingManager application:application
                  continueUserActivity:userActivity
                    restorationHandler:restorationHandler];
}
'''
  
  





참조: https://reactnavigation.org/docs/deep-linking 
