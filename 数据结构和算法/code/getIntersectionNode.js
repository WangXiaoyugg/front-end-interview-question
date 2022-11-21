function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 
 * @param {ListNode} headA 
 * @param {ListNode} headB 
 */
function getIntersectionNode(headA, headB) {
    let pA = headA, pB = headB;
    let hash = new Set();
    while(pA !== null) {
        hash.add(pA)
        pA = pA.next;
    }

    while(pB !== null) {
        if (hash.has(pB)) {
            return pB;
        }
        pB = pB.next;
    }
    return null;
}


function getIntersectionNode(headA, headB) {
    if (headA === null || headB === null) return null;
    let pA = headA, pB = headB;
    while(pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}