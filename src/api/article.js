import request from '@/utils/request'

export const getArticleList = params => {
  return request({
    method: 'GET',
    url: '/v1_0/articles',
    params
  })
}

// 获取所有频道
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/v1_0/channels'
  })
}

// 添加用户频道
export const addUserChannel = channel => {
  return request({
    method: 'PATCH',
    url: '/v1_0/user/channels',
    data: {
      channels: [...channel]
    }
  })
}

// 添加用户频道
export const getArticleById = articleId => {
  return request({
    method: 'GET',
    url: `/v1_0/articles/${articleId}`
  })

  // 模拟数据
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve({
  //       data: { message: 'OK', data: { art_id: 141270, title: 'redis\u4e3b\u4ece\u54e8\u5175\u6a21\u5f0f\u642d\u5efa\u5b9e\u4f8b', pubdate: '2018-11-29T17:18:51', content: '<link rel="stylesheet" href="https://csdnimg.cn/release/phoenix/template/css/ck_htmledit_views-2c6a5211c9.css"/>\n\t\t\t\t\t\t<div class="htmledit_views" id="content_views">\n                <p>\u6700\u8fd1\u56e0\u9879\u76ee\u9700\u8981\u642d\u5efaredis\u73af\u5883\uff0c\u6709\u591a\u79cd\u6a21\u5f0f\u53ef\u4ee5\u9009\u62e9\uff0c\u5176\u4e2d\u6bd4\u8f83\u7ecf\u5178\u7684\u4e00\u79cd\u6a21\u5f0f\u662f\u4e3b\u4ece\u54e8\u5175\u6a21\u5f0f\uff0c\u4e0b\u9762\u8fdb\u884c\u8fd9\u4e00\u6a21\u5f0f\u7684\u642d\u5efa\u6f14\u793a</p>\n\n<p>\u4e00\u53f0\u865a\u62df\u673a\u642d\u5efa\u4e00\u4e2aredis\u4e3b\u4ece\u54e8\u5175\u6a21\u5f0f\u7b80\u5355\u96c6\u7fa4\uff1a\u00a0\u4e00\u4e3b\u3001\u4e00\u4ece\u3001\u4e00\u54e8\u5175</p>\n\n<p>\u865a\u62df\u673a\u7248\u672c\u00a0 \u00a0Red Hat 4.1.2-48\u00a0 \u5185\u5b581\u00a0G</p>\n\n<p>redis\u00a0\u7248\u672c\u00a0 \u00a0 \u00a0redis-2.8.19.tar.gz\uff08\u4ec5\u4e3e\u4f8b\u7528\uff0c\u7248\u672c\u4e0d\u89c4\u5b9a\uff09</p>\n\n<p><strong><span style="color:#333333;">1\u3001</span></strong><strong><span style="color:#333333;">\u4e0a\u4f20redis\u5b89\u88c5\u5305\u53ca\u89c4\u5212\u76ee\u5f55</span></strong></p>\n\n<p>root\u7528\u6237\u767b\u5f55\u865a\u62df\u673a\uff0c\u8fdb\u5165\u684c\u9762\u5efa\u7acb\u4e00\u4e2a\u6587\u4ef6\u5939\u6bd4\u5982 lamp \uff08\u4e0a\u4f20redis\u00a0\u5b89\u88c5\u5305\u7528\u00a0\u8bfb\u8005\u53ef\u81ea\u7531\u9009\u62e9\u5b89\u88c5\u8def\u5f84\uff09</p>\n\n<p><img alt="" class="has" height="481" src="https://img-blog.csdnimg.cn/20181125135800937.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWFvNTI4MQ==,size_16,color_FFFFFF,t_70" width="643"/></p>\n\n<p>\u4e0a\u4f20 redis\u5b89\u88c5\u5305\uff0c\u89e3\u538b\u5b89\u88c5\u5305\uff08\u901a\u5e38\u4f7f\u7528linux\u547d\u4ee4\uff09</p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">tar\u00a0 -zxvf\u00a0 redis-2.8.19.tar.gz</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u5c06\u89e3\u538b\u540e\u7684\u76ee\u5f55\u6539\u540dredis-001\u00a0\u4f5c\u4e3a\u00a0redis \u4e3b\u673a\u5305</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mv redis-2.8.19\u00a0\u00a0 redis-001</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u518d\u89e3\u538b\u4e00\u4efd\uff0c\u6539\u540d\u4e3a redis-002\u00a0\u4f5c\u4e3aredis\u00a0\u4ece\u673a\u5305\uff0c\u7136\u540e\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u56fe\u6240\u793a</span></p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="483" src="https://img-blog.csdnimg.cn/20181125140248642.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWFvNTI4MQ==,size_16,color_FFFFFF,t_70" width="644"/></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u8fdb\u5165 redis-001\u00a0\u76ee\u5f55\u00a0\u8fdb\u884c\u5b89\u88c5 make\u64cd\u4f5c\uff08redis-002\u00a0\u540c\u6837\u9700\u8981make\uff09</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">cd redis-001</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">make</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u521b\u5efa\u5feb\u6377\u76ee\u5f55</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mkdir\u00a0\u00a0 /root/Desktop/lamp/redis-001/bin</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u5c06\u5e38\u7528\u7684redis\u00a0\u5de5\u5177\u4ece\u76f8\u5e94\u6587\u4ef6\u5939\u4e0b\u79fb\u52a8\u5230\u5feb\u6377\u76ee\u5f55\u4e2d\uff0c\u65b9\u4fbf\u96c6\u4e2d\u64cd\u4f5c\u4e0e\u5904\u7406</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u5728redis-001/src\u76ee\u5f55\u4e0b\u6267\u884c\u79fb\u52a8\u547d\u4ee4</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mv mkreleasehdr.sh redis-benchmark redis-check-aof\u00a0 redis-cli redis-server /root/Desktop/lamp/redis-001/bin</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u5728redis001\u76ee\u5f55</span><span style="color:#333333;">\u4e0b\u6267\u884c\u79fb\u52a8\u547d\u4ee4</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mv redis.conf sentinel.conf\u00a0 /root/Desktop/lamp/redis-001/bin</span></p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="185" src="https://img-blog.csdnimg.cn/20181125141033140.png" width="518"/></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u521b\u5efa\u65e5\u5fd7\u76ee\u5f55\u00a0\u7528\u4e8e\u5b58\u653eredis\u5de5\u4f5c\u65e5\u5fd7\u6587\u4ef6</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mkdir\u00a0\u00a0 /root/Desktop/lamp/redis-001/bin/logs</span></p>\n\n<p style="margin-left:0cm;">\u540c\u6837\u00a0\u5bf9redis-002\u76ee\u5f55\u4e5f\u8fdb\u884c\u7c7b\u4f3c\u7684\u64cd\u4f5c</p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mkdir\u00a0\u00a0 /root/Desktop/lamp/redis-001/bin</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">redis002/src</span><span style="color:#333333;">\u4e0b</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mv mkreleasehdr.sh redis-benchmark redis-check-aof\u00a0 redis-cli redis-server /root/Desktop/lamp/redis-002/bin</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">redis002</span><span style="color:#333333;">\u4e0b</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">mv redis.conf sentinel.conf\u00a0 /root/Desktop/lamp/redis-002/bin</span></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;"><strong><span style="color:#333333;">2</span></strong><strong><span style="color:#333333;">\u3001\u4fee\u6539\u4e3b\u673a</span></strong><strong><span style="color:#333333;">redis.conf</span></strong><strong><span style="color:#333333;">\u914d\u7f6e\u6587\u4ef6</span></strong></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">daemonize\u00a0\u00a0 </span><span style="color:#333333;">\u6539\u4e3a</span><span style="color:#333333;"> yes</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">port\u00a0 6379\u00a0\u00a0 </span><span style="color:#333333;">\u4e0d\u7528\u6539</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">pidfile\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 </span><span style="color:#333333;">\u9ed8\u8ba4\u4e0d\u7528\u6539</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">logfile\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 </span><span style="color:#333333;">\u6307\u5b9a\u5230</span><span style="color:#333333;"> redis</span><span style="color:#333333;">\u76ee\u5f55\u4e0b\u7684 "/root/Desktop/lamp/redis-001/bin/logs/redis.log"</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">maxclients \u00a04096\u00a0 \u00a0 \u00a0 \u00a0 \u00a0</span><span style="color:#333333;">\u589e\u52a0\u6700\u5927\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u6570\u91cf\u914d\u7f6e</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">tcp-keepalive\u00a0 \u00a0 </span><span style="color:#333333;">\u4fee\u6539\u4e3a</span><span style="color:#333333;"> 60</span></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;"><strong><span style="color:#333333;">3\u00a0\u4fee\u6539\u4ece\u673a</span></strong><strong><span style="color:#333333;"> redis.conf\u00a0</span></strong><strong><span style="color:#333333;">\u914d\u7f6e\u57fa\u672c\u540c\u4e0a\uff1b</span></strong></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">daemonize\u00a0\u00a0 </span><span style="color:#333333;">\u6539\u4e3a</span><span style="color:#333333;"> yes</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">port\u00a0 6380\u00a0 \u4ece\u673a\u7aef\u53e3</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">pidfile\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 </span><span style="color:#333333;">\u9ed8\u8ba4\u4e0d\u7528\u6539</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">logfile\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 </span><span style="color:#333333;">\u6307\u5b9a\u5230</span><span style="color:#333333;"> redis</span><span style="color:#333333;">\u76ee\u5f55\u4e0b\u7684 "/root/Desktop/lamp/redis-002/bin/logs/redis2.log"</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">maxclients \u00a04096\u00a0 \u00a0 \u00a0 \u00a0 \u00a0</span><span style="color:#333333;">\u589e\u52a0\u6700\u5927\u8fde\u63a5\u7684\u5ba2\u6237\u7aef\u6570\u91cf\u914d\u7f6e</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">tcp-keepalive\u00a0 \u00a0 </span><span style="color:#333333;">\u4fee\u6539\u4e3a</span><span style="color:#333333;"> 60</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u5728\u6700\u540e\u591a\u4e00\u6761\u8bbe\u7f6e</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">slaveof\u00a0 IP\u00a0 </span><span style="color:#333333;">\u7aef\u53e3</span><span style="color:#333333;">\u00a0\u00a0 # IP </span><span style="color:#333333;">\u4e3a\u4e3b\u673a\u7684</span><span style="color:#333333;">IP</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u4f8b\u5982\uff1a</span><span style="color:#333333;">slaveof\u00a0\u00a0</span><span style="color:#0000ff;">\u4e3b\u673a</span><span style="color:#0000ff;">IP</span><span style="color:#333333;">\u00a0 6379</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u6ce8\u610f\uff1a</span><span style="color:#333333;">IP </span><span style="color:#333333;">\u4e3a</span><span style="color:#333333;">redis</span><span style="color:#333333;">\u4e3b\u673a\u7684\u670d\u52a1\u5668</span><span style="color:#333333;">IP</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u7b14\u8005\u8fd9\u91cc\u4e3a\u00a0 slaveof 192.168.110.128\u00a06379</span></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;"><strong><span style="color:#333333;">4 \u914d\u7f6e\u76d1\u542c\u670d\u52a1</span></strong><strong><span style="color:#333333;"> sentinel.conf</span></strong></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u4e3b\u673a\uff0c\u4ece\u673a</span> <span style="color:#333333;">\u4fdd\u6301\u4e00\u81f4\u5373\u53ef</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u53ef\u4ee5\u6e05\u7a7a\u539f\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e\u76f4\u63a5\u590d\u5236\u4e0b\u9762\u4fe1\u606f</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u4e3b\u4ece\u673a</span>\u00a0 <span style="color:#333333;">\u90fd\u8981\u914d\u7f6e\u4e0a\u4e3b\u673a\u7684</span><span style="color:#333333;">IP</span><span style="color:#333333;">\u548c\u7aef\u53e3\uff08\u5982</span>\u00a0<span style="color:#0000ff;">\u4e3b\u673a</span><span style="color:#0000ff;">IP</span><span style="color:#333333;">\u00a0\u00a06379</span><span style="color:#333333;">\u4e3a\u4e3b\u673a\u7684</span><span style="color:#333333;">ip</span><span style="color:#333333;">\u548c\u7aef\u53e3\uff09\uff1a</span></p>\n\n<p style="margin-left:0cm;">\u7b14\u8005\u8fd9\u91cc\u4ec5\u914d\u7f6e\u4e3b\u673a\u7684sentinel\u00a0\u54e8\u5175\uff0c\u4ece\u673a\u672a\u914d\u7f6e\uff08\u5b9e\u73b0 \u4e00\u4e3b\u4e00\u4ece\u4e00\u54e8\u5175\uff0c\u8bfb\u8005\u53ef\u6839\u636e\u9879\u76ee\u9700\u8981\u914d\u7f6e\u591a\u4e2a\u54e8\u5175\uff09</p>\n\n<p style="margin-left:0cm;">\u8fd9\u91cc\u76d1\u542c\u54e8\u5175\u7aef\u53e3\u4e3a 26379</p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">port 26379</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">daemonize yes</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">tcp-keepalive\u00a0 60</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">logfile "/root/Desktop/lamp/redis-001/bin/logs/sentinel.log"</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">sentinel monitor mymaster\u00a0\u00a0</span><span style="color:#0000ff;">\u4e3b\u673a</span><span style="color:#0000ff;">IP\u00a0</span><span style="color:#333333;">\u00a06379 1</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">sentinel down-after-milliseconds mymaster 8000</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">sentinel failover-timeout mymaster 30000</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">sentinel parallel-syncs mymaster 1</span></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;"><strong><span style="color:#333333;">5\u3001\u542f\u52a8</span></strong></p>\n\n<p style="margin-left:0cm;"><strong><span style="color:#333333;">\u5148\u542f\u52a8\u4e3b\u673a\u7684\u670d\u52a1\uff0c\u518d\u542f\u52a8\u4ece\u673a\u7684\u670d\u52a1</span></strong></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">redis-001/bin/redis-server\u00a0 redis.conf\u00a0</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">redis-002/bin/redis-server\u00a0 redis.conf\u00a0</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u518d\u542f\u52a8\u76d1\u542c\u670d\u52a1</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">redis-001/bin/redis-sentinel\u00a0 sentinel.conf</span></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u53ef\u4ee5\u7528\u4e0b\u5217\u547d\u4ee4</span> <span style="color:#333333;">\u6765\u67e5\u770b\u670d\u52a1</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">src/redis-cli\u00a0 -p\u00a0 6379 info</span></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">src/redis-cli\u00a0 -p\u00a0 26379 info</span></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u7528 ps -ef|grep redis\u00a0\u67e5\u770b\u670d\u52a1\u8fdb\u7a0b</span></p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="81" src="https://img-blog.csdnimg.cn/20181125142257763.png" width="626"/></p>\n\n<p style="margin-left:0cm;"><span style="color:#333333;">\u67e5\u770b\u65e5\u5fd7\u76ee\u5f55\u6587\u4ef6</span></p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="72" src="https://img-blog.csdnimg.cn/20181125142423444.png" width="476"/></p>\n\n<p style="margin-left:0cm;">\u7528\u5de5\u7a0b\u53bb\u8fde\u63a5redis\u54e8\u5175\u76d1\u542c\u670d\u52a1\uff0c\u542f\u52a8\u9879\u76eetomcat\u00a0\u6210\u529f</p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="474" src="https://img-blog.csdnimg.cn/20181125142734818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWFvNTI4MQ==,size_16,color_FFFFFF,t_70" width="1200"/></p>\n\n<p style="margin-left:0cm;">\u00a0</p>\n\n<p style="margin-left:0cm;">\u518d\u7528redis\u67e5\u770b\u5de5\u5177\u00a0redis-desktop-manager\u00a0\u67e5\u770b\u4e3b\u673a\u4e0e\u4ece\u673a\u7684\u00a0\u6570\u636e\u5b58\u50a8\u60c5\u51b5</p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="541" src="https://img-blog.csdnimg.cn/20181125143157648.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWFvNTI4MQ==,size_16,color_FFFFFF,t_70" width="1099"/></p>\n\n<p style="margin-left:0cm;">\u518d\u770b\u4ece\u673a</p>\n\n<p style="margin-left:0cm;"><img alt="" class="has" height="328" src="https://img-blog.csdnimg.cn/20181125143226562.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2xpeGlueWFvNTI4MQ==,size_16,color_FFFFFF,t_70" width="348"/></p>\n\n<p style="margin-left:0cm;">\u5230\u6b64\uff0c\u6700\u7b80\u5355\u7684 redis\u00a0\u4e00\u4e3b\u4e00\u4ece\u4e00\u54e8\u5175\u73af\u5883\u642d\u5efa\u6210\u529f\uff01</p>            </div>', aut_id: 3, ch_id: 7, aut_name: '18811179159', aut_photo: 'http://toutiao-img.itheima.net/Fkj6tQi3xJwVXi1u2swCElotfdCi', is_followed: false, attitude: null, is_collected: false, recomments: [] } }

  //     })
  //   }, 500)
  // })
}

// 收藏文章
export const collectArticle = data => {
  return request({
    method: 'POST',
    url: '/v1_0/article/collections',
    data
  })
}

// 取消收藏文章
export const cancelCollectArticle = articleId => {
  return request({
    method: 'DELETE',
    url: `/v1_0/article/collections/${articleId}`
  })
}

// 对文章点赞
export const likeArticle = data => {
  return request({
    method: 'POST',
    url: '/v1_0/article/likings',
    data
  })
}

// 取消对文章的点赞
export const UnlikeArticle = articleId => {
  return request({
    method: 'DELETE',
    url: `/v1_0/article/likings/${articleId}`
  })
}

// 获取文章评论
export const getArticleComment = params => {
  return request({
    method: 'GET',
    url: '/v1_0/comments',
    params
  })
}

// 评论点赞
export const addCommentLike = data => {
  return request({
    method: 'POST',
    url: '/v1_0/comment/likings',
    data
  })
}

// 评论取消点赞
export const deleteCommentLike = commentId => {
  return request({
    method: 'DELETE',
    url: `/v1_0/comment/likings/${commentId}`
  })
}

// 发布评论
export const releaseComment = data => {
  return request({
    method: 'POST',
    url: '/v1_0/comments',
    data
  })
}
