<view class="item-container" wx:for="{{topics}}" wx:key="{{index}}">
  <image class="item-user-avatar" src="{{item.user.avatar_url}}" bindtap="tapToUserProfile" data-user-login="{{item.user.login}}"></image>
  <view class="item-text-container" bindtap="tapToTopicItem" data-id="{{item.id}}">
    <view class="item-text-title">{{item.title}}</view>
    <view class="item-text-node-name">{{item.node_name}}</view>
    <view class="item-text-user-name">{{item.user.name}}</view>
    <view class="item-text-created-at">{{item.created_at}}</view>
  </view>
</view>

<!-- <view wx:for="{{topics}}" wx:key="{{index}}">
  <view bindtap="navigate" data-id="{{item.id}}">{{item.created_at}}</view>
  <view bindtap="navigate" data-id="{{item.id}}">{{item.likes_count}}</view>
  <view bindtap="navigate" data-id="{{item.id}}">{{item.replies_count}}</view>
</view> -->
