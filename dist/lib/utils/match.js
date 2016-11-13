'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = match;
function match() {
  var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var stringValue = arguments[1];
  var fallBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var sourceKey = source.find(function (value) {
    if (value.key instanceof RegExp) {
      var test = stringValue.search(value.key) >= 0;
      return test;
    } else {
      return new RegExp(value, 'g').test(stringValue);
    }
  });

  if (sourceKey) {
    return sourceKey.value;
  } else {
    return fallBack;
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9saWIvdXRpbHMvbWF0Y2guanMiXSwibmFtZXMiOlsibWF0Y2giLCJzb3VyY2UiLCJzdHJpbmdWYWx1ZSIsImZhbGxCYWNrIiwic291cmNlS2V5IiwiZmluZCIsInZhbHVlIiwia2V5IiwiUmVnRXhwIiwidGVzdCIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxLO0FBQVQsU0FBU0EsS0FBVCxHQUEyRDtBQUFBLE1BQTNDQyxNQUEyQyx1RUFBbEMsRUFBa0M7QUFBQSxNQUE5QkMsV0FBOEI7QUFBQSxNQUFqQkMsUUFBaUIsdUVBQU4sSUFBTTs7QUFDeEUsTUFBTUMsWUFBWUgsT0FBT0ksSUFBUCxDQUNoQixVQUFDQyxLQUFELEVBQVc7QUFDVCxRQUFJQSxNQUFNQyxHQUFOLFlBQXFCQyxNQUF6QixFQUFpQztBQUMvQixVQUFNQyxPQUFPUCxZQUFZUSxNQUFaLENBQW1CSixNQUFNQyxHQUF6QixLQUFpQyxDQUE5QztBQUNBLGFBQU9FLElBQVA7QUFDRCxLQUhELE1BR087QUFDTCxhQUFRLElBQUlELE1BQUosQ0FBV0YsS0FBWCxFQUFrQixHQUFsQixDQUFELENBQXlCRyxJQUF6QixDQUE4QlAsV0FBOUIsQ0FBUDtBQUNEO0FBQ0YsR0FSZSxDQUFsQjs7QUFXQSxNQUFJRSxTQUFKLEVBQWU7QUFDYixXQUFPQSxVQUFVRSxLQUFqQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9ILFFBQVA7QUFDRDtBQUNGIiwiZmlsZSI6Im1hdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF0Y2ggKHNvdXJjZSA9IFtdLCBzdHJpbmdWYWx1ZSwgZmFsbEJhY2sgPSBudWxsKSB7XG4gIGNvbnN0IHNvdXJjZUtleSA9IHNvdXJjZS5maW5kKFxuICAgICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmtleSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICBjb25zdCB0ZXN0ID0gc3RyaW5nVmFsdWUuc2VhcmNoKHZhbHVlLmtleSkgPj0gMFxuICAgICAgICByZXR1cm4gdGVzdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChuZXcgUmVnRXhwKHZhbHVlLCAnZycpKS50ZXN0KHN0cmluZ1ZhbHVlKVxuICAgICAgfVxuICAgIH1cbiAgKVxuXG4gIGlmIChzb3VyY2VLZXkpIHtcbiAgICByZXR1cm4gc291cmNlS2V5LnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbGxCYWNrXG4gIH1cbn1cbiJdfQ==