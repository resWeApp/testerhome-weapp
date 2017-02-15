<view wx:for="{{topics}}" wx:key="{{index}}">
  <view bindtap="navigate" data-id="{{item.id}}">{{item.title}}</view>
  <image class="item-user-avatar" src="{{item.user.avatar_url}}"></image>
</view>

<!-- <view wx:for="{{topics}}" wx:key="{{index}}">
  <view bindtap="navigate" data-id="{{item.id}}">{{item.title}}</view>
  <view bindtap="navigate" data-user-login="{{item.user.login}}">{{item.user.name}}</view>
  <view bindtap="navigate" data-node-id="{{item.node_id}}">{{item.node_name}}</view>
  <view bindtap="navigate" data-id="{{item.id}}">{{item.created_at}}</view>
  <view bindtap="navigate" data-id="{{item.id}}">{{item.likes_count}}</view>
  <view bindtap="navigate" data-id="{{item.id}}">{{item.replies_count}}</view>
  <image src="{{ROOT_URL + item.user.avatar_url.replace(/\!.+$/, '!md')}}"></image>
</view> -->
