import React, { useEffect } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import PostCard from '../components/PostCard';
import usePosts from '../hooks/usePosts';
import events from '../lib/events';

function FeedScreen() {
  const { posts, noMorePost, refreshing, onLoadMore, onRefresh, removePost } = usePosts();

  const postsReady = posts != null;
  useEffect(() => {
    if (postsReady) {
      SplashScreen.hide();
    }
  }, [postsReady]);

  useEffect(() => {
    events.addListener('refresh', onRefresh);
    events.addListener('removePost', removePost);
    return () => {
      events.removeListener('refresh', onRefresh);
      events.removeListener('removePost', removePost);
    };
  }, [onRefresh, removePost]);

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.75}
      ListFooterComponent={!noMorePost && <ActivityIndicator style={styles.spinner} size={32} color="#6200ee" />}
      refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing} />}
    />
  );
}

const renderItem = ({ item }) => {
  return (
    <PostCard createdAt={item.createdAt} description={item.description} id={item.id} user={item.user} photoURL={item.photoURL} />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
  },
  spinner: {
    height: 64,
  },
});

export default FeedScreen;
