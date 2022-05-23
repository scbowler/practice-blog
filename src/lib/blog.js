import axios from 'axios';

class Blog {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    const { data } = await axios.get(this.baseUrl);
    return data.response;
  }

  async getPost(id) {
    const { data } = await axios.get(`${this.baseUrl}/${id}`);

    return data.response;
  }

  async addPost(post) {
    const { data } = await axios.post(this.baseUrl, post);

    return data.response;
  }

  async deletePost(id) {
    const { data } = await axios.delete(`${this.baseUrl}/${id}`);

    return data.response;
  }

  async updatePost(post, id) {
    const { data } = await axios.put(`${this.baseUrl}/${id}`, post);

    return data.response;
  }
}

export default Blog;
